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
       const res= await axios.get(`/api/lists${props.type ? "?type="+ props.type : ""}${genre ? "&genre="+genre : ""}`,
       {
        headers: {token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZWQ5OTlmNDRmYzVlZTAyZTI1YzY5MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyNjg0ODYzMiwiZXhwIjoxNzI3NDUzNDMyfQ.jhlikWH5f1cI0pETn40FyYB8J0--jT5NTzEIkt9LJ5o"}
       });
       console.log(res);
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
      {lists.map((list)=>(<List listt={list} key={list.id} />))}
    </div>
  )
}
