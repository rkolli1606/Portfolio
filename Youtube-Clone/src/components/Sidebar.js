import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'


const Sidebar = () => {

  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)
  if(!isMenuOpen)
    return null;

  return (
    <div className="p-3 shadow w-48">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watchlater</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar