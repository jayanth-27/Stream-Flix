import React,{useState} from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Link} from "react-router-dom";

export default function Navbar() {
  const [scroll,setScroll]=useState(false);
  window.onscroll= () =>{
    setScroll(window.pageYOffset===0 ? false : true);
    return () => (window.onscroll=null);
  };
  return (
    <div className={scroll ? 'navbar scrolled' : 'navbar'}>
      <div className='container'>
        <div className='left'>
            <Link to="/" className='link' >
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2880px-Netflix_2015_logo.svg.png"/>
            </Link>
            <Link to="/" className='link' >
              <span>Home Page</span>
            </Link>
            <Link to="/series" className='link'>
              <span>Series</span>
            </Link>
            <Link to="/movies" className='link'>
              <span>Movies</span>
            </Link>
            
            <span>Streaming Hot</span>
            <span>My List</span>
        </div>
        <div className='right'>
            <SearchIcon className='icon'/>
            <span>KIdded</span>
            <NotificationsNoneIcon className='icon'/>
            <img src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-w3lqr61qe57e9yt8.webp" ></img>
            <div className="profile">
              <ArrowDropDownIcon className='icon'/>
              <div className="options">
                <span>
                  Settings
                </span>
                <span>
                  Log Out
                </span>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
