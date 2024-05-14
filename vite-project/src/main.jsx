import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header.jsx';
import MainPage from './components/MainPage.jsx';
import Register from './components/Register.jsx';
import Popular from './components/PopularPage.jsx';
import NowPlaying from './components/NowPlayingPage.jsx';
import TopRated from './components/TopRatedPage.jsx';
import Upcoming from './components/Upcoming.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <BrowserRouter>
        <div>
          <Header/>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="/popular" element={<Popular/>}/>
            <Route path="/nowplay" element={<NowPlaying/>}/>
            <Route path="/toprated" element={<TopRated/>}/>
            <Route path="/upcoming" element={<Upcoming/>}/>
          </Routes> 
        </div>
      </BrowserRouter>
  </React.StrictMode>,
)