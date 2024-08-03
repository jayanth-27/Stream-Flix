import "./listItem.css"
import React from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';

export default function ListItem() {
  return (
    <div className="listItem">
      <img src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/36bdc5ea4443cd8e42f22ec7d3884cbb.jpe"></img>
      <div className="itemInfo">
        <div className="icons">
          <PlayCircleIcon/>
          <AddCircleOutlineRoundedIcon/>
          <CancelOutlinedIcon/>
          <ThumbUpOffAltOutlinedIcon/>
        </div>
      </div>
    </div>
  )
}
