import React from 'react'
import{useDispatch} from 'react-redux'
import{closeMenu} from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'

const WatchPage = () => {

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams()
  React.useEffect(()=>{
    dispatch(closeMenu())
  },[])
  return (
    <div className='w-full flex flex-col'>
      <div className="h=[500px] flex w-full">
        <div>
          <iframe width="1000" height="500" src={"https://www.youtube.com/embed/"+searchParams.get('v') }
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen></iframe>
        </div>
        
            <LiveChat/>
        
      </div>
      <CommentsContainer/>
    </div>
  )
}

export default WatchPage