import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import Featured from '../components/featured/Featured'
import List from '../components/list/List'
import axios from "axios";

export default function Home(props) {
  const [lists,setLists]=useState([]);
  const [genre,setGenre]=useState(null);
  useEffect(()=>{
    const getRandomList= async ()=>{
      try{
       const res= await axios.get(`lists${props.type ? "?type="+ props.type : ""}${genre ? "&genre="+genre : ""}`,
       {
        headers: {token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YmQzZjNhMjlhOTMyOGIyYTEwMWEyMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyNDAxODQzMSwiZXhwIjoxNzI0NjIzMjMxfQ.G_ZEbIYKRueKe3YGyoTvuNUz2T9y0viG3RMpRgTDu90"}
       });
       setLists(res.data);
     }catch(err)
     {
        console.log(err);
     }
    };
    getRandomList();
  },[props.type, genre]);
  return (
    <div className='home' >
      <Navbar/>
      <Featured type={props.type}/>
      {lists.map((list)=>(<List list={list} />))}
    </div>
  )
}
