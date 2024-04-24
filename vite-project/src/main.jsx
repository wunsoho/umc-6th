import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { movies } from "./movies";
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div className="app-container">
                  {
                    movies.results.map((item) => {
                      return (
                        <App
                        poster_path={item.poster_path}
                        title={item.title}
                        vote_average={item.vote_average}  
                        overview={item.overview}
                        />
                      )
                    })
                  }
            </div>
          }/>
        </Routes> 
      </BrowserRouter>

  </React.StrictMode>,
)