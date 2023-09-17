import React from 'react'

const commentsData = [
    {
        name:"ramu",
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing el',
        replies:[],
    },
    {
        name:"ramu",
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing el',
        replies:[
            {
                name:"ramu",
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing el',
                replies:[
                    {
                        name:"ramu",
                        text:'Lorem ipsum dolor sit amet, consectetur adipiscing el',
                        replies:[],
                    },
                    {
                        name:"ramu",
                        text:'Lorem ipsum dolor sit amet, consectetur adipiscing el',
                        replies:[],
                    }
                ],
            },
            {
                name:"ramu",
                text:'Lorem ipsum dolor sit amet, consectetur adipiscing el',
                replies:[],
            },

        ],
    },
    {
        name:"ramu",
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing el',
        replies:[],
    },
    {
        name:"ramu",
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing el',
        replies:[],
    },
    {
        name:"ramu",
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing el',
        replies:[],
    },
    {
        name:"ramu",
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing el',
        replies:[],
    }

]

const Comment = ({comment})=>{
    
    const {name,text} = comment
    
    return(
        <div className='p-2 m-2 bg-gray-300'>
            <h1 className='font-bold'>{name}</h1>
            <p>{text}</p>
        </div>
    )
}
const CommentsList = ({comments})=>{
    //console.log("commentsData",comments)
    return comments.map(comment=>
        (   <>
            <Comment comment={comment}/>
            <div className='pl-5 border border-l-black'>
                <CommentsList comments={comment.replies}/>
            </div>
            </> 
        )
    )
}


const CommentsContainer = () => {
  return (
    <div>
        <h1 className='font-bold'>Comments:</h1>
       {<CommentsList comments={commentsData}/>}
    </div>
  )
}

export default CommentsContainer