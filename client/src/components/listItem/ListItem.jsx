import "./listItem.css";
import React, { Fragment, useState, useEffect } from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import axios from "axios";

export default function ListItem(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  // Fetch movie details on component mount or when props.item changes
  useEffect(() => {
    const getMovies = async () => {
      if (props.item) {
        try {
          const res = await axios.get(`/api/movie/find/${props.item}`, {
            headers: {
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZWQ5OTlmNDRmYzVlZTAyZTI1YzY5MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyNjg0ODYzMiwiZXhwIjoxNzI3NDUzNDMyfQ.jhlikWH5f1cI0pETn40FyYB8J0--jT5NTzEIkt9LJ5o",  // Ensure the token is up-to-date
            },
          });
          setMovie(res.data);
        } catch (err) {
          console.error("Failed to fetch movie data:", err);
        }
      }
    };
    getMovies();
  }, [props.item]);

  return (
    <div 
      className="listItem" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movie.img} alt={movie.title || "Movie Thumbnail"} />
      
      {isHovered && movie.trailer && (
        <Fragment>
          <iframe 
            src={movie.trailer}
            title={movie.title || "Movie Trailer"}
            allow="autoplay; encrypted-media"
            allowFullScreen
            frameBorder="0"
          ></iframe>
          
          <div className="itemInfo">
            <div className="icons">
              <PlayCircleIcon />
              <AddCircleOutlineRoundedIcon />
              <CancelOutlinedIcon />
              <ThumbUpOffAltOutlinedIcon />
            </div>
            <div className="iteminfoTop">
              <span>{movie.year}</span>
              <span>+{movie.limit}</span>
              {movie.isSeries && <span>10 seasons</span>}
            </div>
            <div className="itemdesc">
              {movie.desc}
            </div>
            <div className="genre">{movie.genre || "Unknown Genre"}</div>
          </div>
        </Fragment>
      )}
    </div>
  );
}
