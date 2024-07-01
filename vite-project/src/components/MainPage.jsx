import { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import * as B from '../MainPage.style.jsx';
import Slider from 'react-slick';
import movieImg from '../movie1.png';

function MainPage() {
  const settings1 = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const domain = "https://image.tmdb.org/t/p/w1280/";
  const [search, setSearch] = useState([]);
  const [title, setTitle] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const debounceTimeoutRef = useRef(null);
  const navigate = useNavigate();

  const onClickImg = (movie) => {
    navigate(`/movie/${movie.id}`,{
      state: {
        id : movie.id,
        poster_path : movie.poster_path,
        vote_average : movie.vote_average,
        release_date : movie.release_date,
        overview : movie.overview,
      },
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      if (title.trim() !== '') {
        try {
          setIsLoading(true);
          console.log('Fetching data for title:', title);
          const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=true&language=en-US&page=1`, {
            method: "GET",
            headers: {  
              'Content-Type': 'application/json',
              'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGY2YmE1ZmUwZTRkN2U0ZGI1Mjc5M2U1Y2ViZTE4ZiIsInN1YiI6IjY2Mjg5NmM0MTc2YTk0MDE2NjgyMjliMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sl80DdobF9_NA9Mib8y9iGb54XIqgHu6igfwZjFfP8I`
            },
          });
          setSearch(response.data.results);
          console.log(response);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current); 
    }

    debounceTimeoutRef.current = setTimeout(() => {
      fetchData();
    }, 500); 

    return () => {
      clearTimeout(debounceTimeoutRef.current); 
    };
  }, [title]);

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  }
  
  return (
    <div>
      <B.CustomSlider>
        <Slider {...settings1}>
          <div className="slide-container">
            <div className="slide_text">환영합니다</div>
          </div>
        </Slider>
      </B.CustomSlider>
      <B.Search>
        <B.Title>
          <img className="movieimg" src={movieImg} width='50px'></img>
          <div className="title1">Find your movies !</div>
        </B.Title>
        <input className="search1" onChange={handleInputChange}></input>
      </B.Search>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        title && (
          <B.Info>
            {search.map((movie, index) => ( 
              <B.Component key={index} onMouseOver={() => setHoveredIndex(index)} onMouseOut={() => setHoveredIndex(null)}>
                <B.Movieimg>
                  <B.Img src={domain + movie.poster_path} alt={movie.title} onClick={() => onClickImg(movie)}/>
                  <B.Movieinfo>
                    <div className="title">{movie.title}</div>
                    <div id="average">{movie.vote_average}</div>
                  </B.Movieinfo>
                </B.Movieimg>
                <B.Hideinfo style={hoveredIndex === index ? { display: "block" } : { display: "none" }}>
                  <div>{movie.title}</div>
                  <div>{movie.overview}</div>
                </B.Hideinfo>
              </B.Component>
            ))}
          </B.Info>
        )
      )}
    </div>
  );
}

export default MainPage;