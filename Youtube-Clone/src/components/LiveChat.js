import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import {useDispatch, useSelector} from 'react-redux'
import { addMessage } from '../utils/chatSlice'

const LiveChat = () => {
   
    const dispatch = useDispatch()

    const chatMessages = useSelector(store=>store.chat.messages)
    //console.log("inside chatMessages",chatMessages)
    useEffect(()=>{
        const i = setInterval(()=>{
            //API Polling
            
            dispatch(addMessage({
                name:'Ramu Kolli',
                message:"Lorem ipsum dolar site diam"
            }))
        },2000)

        return ()=>clearInterval(i)
    },[])

  return (
    <div className='h-[500px] ml-1 p-2 border border-black w-full bg-slate-100 rounded-md overflow-y-scroll'>
        {chatMessages.map((c,index)=>{
           return  <ChatMessage key={index} name={c.name} message={c.message}/>
        })}
        
    </div>
  )
}

export default LiveChat