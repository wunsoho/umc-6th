import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import * as A from './Popular.style.jsx';
import axios from "axios";
import {SyncLoader} from 'react-spinners';
import Pagination from '../Pagination.jsx';

function PopularPage() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const domain = "https://image.tmdb.org/t/p/w1280/";
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const[currentPage, setCurrentPage] = useState(1);
  const[totalPages, setTotalPages] = useState(10);
  const navigate = useNavigate();

  const onClickImg = (movie) => {
    navigate(`/popular/${movie.title}`,{
      state: {
        poster_path : movie.poster_path,
        vote_average : movie.vote_average,
        release_date : movie.release_date,
        overview : movie.overview,
      },
    });
  }
      const fetchData = async (page) => {
          try {
              const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGY2YmE1ZmUwZTRkN2U0ZGI1Mjc5M2U1Y2ViZTE4ZiIsInN1YiI6IjY2Mjg5NmM0MTc2YTk0MDE2NjgyMjliMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sl80DdobF9_NA9Mib8y9iGb54XIqgHu6igfwZjFfP8I`
                },
              });
              setMovies(response.data.results);
              setTotalPages(response.data.total_pages);
              setLoading(false);
          } catch (error) {
              console.error("Error fetching data:", error);
          }
      };
      useEffect(() => {
        fetchData(currentPage);
    }, [currentPage]);

      const handlePageChange = (page) => {
          if (page < 1 || page > totalPages) {
            alert('가장 첫 번째 페이지입니다.')
            return;
          }
          setCurrentPage(page);
      };
    return (
      <div>
      {loading ? ( 
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
              <SyncLoader color="#ffffff" loading={loading} size={30} />
          </div>
          ) : (
          <A.movieGrid>
          {movies.map((movie, index) => ( 
                    <A.component key={index} onMouseOver={() => setHoveredIndex(index)} onMouseOut={() => setHoveredIndex(null)}>
                      <A.movie_img onClick={() => onClickImg(movie)}>
                        <A.img src={domain + movie.poster_path} alt={movie.title}/>
                        <A.movie_info>
                          <div>{movie.title}</div>
                          <div  id = "average">평점: {movie.vote_average}</div>
                        </A.movie_info>
                      </A.movie_img>
                      <A.hide_info style={hoveredIndex === index ? { display : "block"} : { display : "none"}}>
                        <div>{movie.title}</div>
                        <div>{movie.overview}</div>
                      </A.hide_info>
                    </A.component>
          ))}
          </A.movieGrid>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={10}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default PopularPage;