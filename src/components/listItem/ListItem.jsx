import "./listItem.css"
import React, { Fragment, useState } from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';

export default function ListItem() {
  const [isHovered,setIsHovered]=useState(false);
  return (
    <div className="listItem" onMouseEnter={()=>setIsHovered(true)}
    onMouseLeave={()=>setIsHovered(false)}>
      <img src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/36bdc5ea4443cd8e42f22ec7d3884cbb.jpe"></img>
      {isHovered && (
        <Fragment>
          <iframe src="https://vlipsy.com/embed/GqVeQWBW" frameborder="0"></iframe>
        <div className="itemInfo">
          <div className="icons">
            <PlayCircleIcon/>
            <AddCircleOutlineRoundedIcon/>
            <CancelOutlinedIcon/>
            <ThumbUpOffAltOutlinedIcon/>
          </div>
        <div className="iteminfoTop">
          <span>TV-14</span>
          <span>10 seasons</span>
        </div>
        <div className="itemdesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sit quisquam aliquid exercitationem excepturi aspernatur, quidem ullam provident, nesciunt, quae placeat dolores officiis magnam tempora? Quo itaque molestias assumenda distinctio.
        </div>
        <div className="genre">Anime</div>
      </div>
        </Fragment>
      )}
    </div>
  )
}
