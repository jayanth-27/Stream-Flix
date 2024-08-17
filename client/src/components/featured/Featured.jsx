import React from 'react'
import "./featured.css"
import Home from '../../home_page/Home';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function featured(props) {
  const type=props.type;
  return (
    <div className='featured'>
        { type && (
            <div className='category'>
                <span>{type==="movies" ? "Movie" : "Series"}</span>
                <select name="genre" id="genre">
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}           
        <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/03/Deku-Looks-Nervous.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5"></img>
        <div className='info'>
            <img src="MHA.png"></img>
            <span className='desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora qui molestiae, commodi nemo necessitatibus atque modi, dolorem corrupti provident ad odit ipsa aut est libero, nulla ea debitis nostrum? Earum!
            </span>
            <div className='buttons'>
                <button className='play'>
                    <PlayArrowIcon/>
                    <span>Play</span>
                </button>
                <button className='more'>
                    <InfoOutlinedIcon/>
                    <span>More Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}
