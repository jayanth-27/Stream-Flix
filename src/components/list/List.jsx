import "./list.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItem from "../listItem/ListItem";

import React from 'react'
import { useRef } from "react";
import { useState } from "react";
import { style } from "@mui/system";

export default function List() {
    const [slideNum,setSlideNum]=useState(0);
    const [isMoved,setIsMoved]=useState(false);
    const listRef=useRef(null);
    const handleClick=(direction)=>{
        if(slideNum-1===0)
        {
            setIsMoved(false);
        }
        setIsMoved(true);
        var distance=listRef.current.getBoundingClientRect().x-35;
        if(direction==="left" && slideNum>0)
        {
            setSlideNum(slideNum-1);
            listRef.current.style.transform=`translateX(${230+distance}px)`;
            if(slideNum-1===0)
            {
             setIsMoved(false);
            }
        }
        if(direction==="right" && slideNum<4)
        {
            setSlideNum(slideNum+1);
            listRef.current.style.transform=`translateX(${-230+distance}px)`;
        }
    }
  return (
    <div className="list">
      <span className="listTitle">
        Continue to watch
      </span>
      <div className="wrapper">
        <div className="sliderArrow lefts" onClick={()=>handleClick("left")} style={{display: !isMoved && "none"}}>
         <ArrowBackIosIcon fontSize="large"/>
        </div>
        <div className="movies" ref={listRef}>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
        </div>
        <div className="sliderArrow rights" onClick={()=>handleClick("right")}>
          <ArrowForwardIosIcon fontSize="large"/>
        </div>
      </div>
    </div>
  )
}
