import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Featured from '../components/featured/Featured'
import List from '../components/list/List'

export default function Home(props) {
  return (
    <div className='home' >
      <Navbar/>
      <Featured type={props.type}/>
      <List/>
      <List/>
      <List/>
    </div>
  )
}
