import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header.jsx';
import MainPage from './components/MainPage.jsx';
import Popular from './components/Popular/PopularPage.jsx';
import PopularDetail from './components/Popular/PopularDetail.jsx';
import NowPlaying from './components/NowPlaying/NowPlayingPage.jsx';
import NowPlayingDetail from './components/NowPlaying/NowPlayingDetail.jsx';
import TopRated from './components/TopRated/TopRatedPage.jsx';
import TopRatedDetail from './components/TopRated/TopRatedDetail.jsx';
import Upcoming from './components/Upcoming/Upcoming.jsx';
import UpcomingDetail from './components/Upcoming/UpcomingDetail.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import './index.css';
import SignupPage from './components/SignupPage.jsx';
import SearchDetail from './components/SearchDetail.jsx';
import Login from './components/Login.jsx';
  
ReactDOM.createRoot(document.getElementById('root')).render(
      <BrowserRouter>
        <div>
          <Header/> 
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/movie/:id" element={<SearchDetail/>}/>
            <Route path="signup" element={<SignupPage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="popular" element={<Popular/>}/>
            <Route path="popular/:title" element={<PopularDetail/>}/>
            <Route path="nowplay" element={<NowPlaying/>}/>
            <Route path="nowplay/:title" element={<NowPlayingDetail/>}/>
            <Route path="toprated" element={<TopRated/>}/>
            <Route path="toprated/:title" element={<TopRatedDetail/>}/>
            <Route path="upcoming" element={<Upcoming/>}/>
            <Route path="upcoming/:title" element={<UpcomingDetail/>}/>
            <Route path="/*" element={<NotFound/>}/>
          </Routes> 
        </div>
      </BrowserRouter>
)