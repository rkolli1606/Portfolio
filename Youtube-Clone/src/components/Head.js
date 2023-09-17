import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API, YOUTUBE_VIDEO_API } from '../utils/contants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
    const[searchQuery,setSearchQuery] = React.useState("")
    const [suggestions,setSuggestions] = React.useState([])
    const[showSuggestions,setShowSuggestions] = React.useState(false)
    const searchCache = useSelector((store)=>store.search) 
    const dispatch = useDispatch();
    
    useEffect(()=>{
        const timer = setTimeout(()=>{
        if(searchCache&&searchCache[searchQuery])
        {
            setSuggestions(searchCache[searchQuery])
        } else{
            getSearchSuggestions()
           }
        },200)
        
        return ()=>{
                clearTimeout(timer);
            }
        }
    ,[searchQuery])

    const getSearchSuggestions = async ()=>{
        const data = await fetch(YOUTUBE_SEARCH_API+searchQuery)
        const json = await data.json()
        //console.log("head.js ",json)
        setSuggestions(json[1])
        //console.log(suggestions)
        //update cache
        dispatch(cacheResults({
            [searchQuery]:json[1]}))

    }




    

    const toggleMenuHandler = ()=>{
        dispatch(toggleMenu())
    }
   
  return (

    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
        <div className='flex col-span-1'>
            <img onClick = {()=>toggleMenuHandler()} className="h-8 cursor-pointer" alt="hamburger-menu" src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"></img>
            <img className="h-8 pl-3" alt="youtube-logo" src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"></img>
        </div>
        <div className='col-span-10 px-10'>
            <input type="text" 
            value={searchQuery}
            onChange = {(e)=>setSearchQuery(e.target.value)}
            onFocus = {()=>setShowSuggestions(true)}
            onBlur = {()=>setShowSuggestions(false)}
            className='w-1/2 border border-gray-400 rounded-l-full p-1'>
            </input>
            <button className='border border-gray-400 rounded-r-full px-5 py-1 bg-gray-100'>🔍</button>
            {showSuggestions&&<div className='fixed bg-white w-[32rem]'>
                <ul> {suggestions.map(s=><li key={s}>🔍  {s}</li>)} </ul>
            </div>}
        
        </div>
        <div className='col-span-1'>
            <img className="h-8" alt="user-icon" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"></img>
        </div>
    </div>
    
    
    
  )
}

export default Head