import React from 'react'

import {YOUTUBE_VIDEO_API} from '../utils/contants'
import VideoCard from "./VideoCard"
import {Link} from 'react-router-dom'

const VideoContainer = () => {
  const [videos,setVideos] = React.useState([])

  React.useEffect(()=>{
    //console.log("inside useEffect")
    getVideos()
  },[])

const getVideos = async ()=>{
  const data = await fetch(YOUTUBE_VIDEO_API)
  const json = await data.json()
  setVideos(json.items)
  //console.log("json data "+json)
}

  return (
    <div className='flex flex-wrap'>
        {videos.map(video=>
        <Link to={"/watch?v="+video.id} ><VideoCard key ={video.id} info={video}></VideoCard></Link>
        )}
    </div>
  )
}

export default VideoContainer