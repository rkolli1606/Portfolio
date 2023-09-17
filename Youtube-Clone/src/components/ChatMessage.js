import React from 'react'

const ChatMessage= ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm'>
         <img className="h-8" alt="user-icon" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"></img>
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage
