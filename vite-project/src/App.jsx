import React, { useState } from "react";
import * as A from './App.style.jsx';
import { useNavigate} from "react-router-dom";

const domain = "https://image.tmdb.org/t/p/w1280/";

function App({ title, vote_average, poster_path, overview }) {

  const navigate = useNavigate();

  const onClickImg = () => {
    navigate(`/movie/${title}`, {
      state: {
      domain: { domain },
      poster_path : {poster_path},
      }
    })
  }
  
  const t = { display: "block" };
  const f = { display: "none" };

  const [tf, setTf] = useState(false);
  const MouseOut = () => {
    setTf(false);
  };

  const MouseIn = () => {
    setTf(true);
  };

    return (
      <A.component onMouseOver={MouseIn} onMouseOut={MouseOut} onClick={onClickImg}>
        <A.movie_img>
          <A.img src={domain + poster_path} alt={title} />
          <A.movie_info>
            <div>{title}</div>
            <div id="average">{vote_average}</div>
          </A.movie_info>
        </A.movie_img>
        <A.hide_info style={tf ? t : f}>
          <b>{title}</b>
          <span>{overview}</span>
        </A.hide_info>
      </A.component>
  );
}

export default App;