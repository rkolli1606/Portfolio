import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const blist = ["All","Gaming",'Songs','Cricket','Soccer','News','Cooking','Music','Live']
  const blist_map = blist.map((item,index)=><Button key = {index} name={item}></Button>)
  return (
    <div className='flex'>
       {blist_map}
    </div>
  )
}

export default ButtonList