import React, { useState,useEffect,CSSProperties } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import {Outlet,useOutlet} from 'react-router-dom'
import{Navigate,useNavigate} from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'
import {db} from '../components/Firebase'
import {collection, getDocs, addDoc,updateDoc,doc,deleteDoc} from 'firebase/firestore'

import Payment from './Payment'
import {POST_URL, HEADERS} from '../utils/contants'





const Shop = () => {
  const outlet = useOutlet()
  const{user,userDataFromDb,updateUser,getUsers1} = UserAuth()
  const navigate = useNavigate()
  const usersCollectionRef = collection(db,"users")
  // console.log(outlet)
  const [dataFromDb,setDataFromDb] = useState([])
  const[isPremiumUser,setIsPremiumUser] = useState(false)
  const[enablePayment,setEnablePayment] = useState(false)
  const[bullet,setBullet] = useState("")
  const[points,setPoints] = useState({})
  const[isLoading,setIsLoading] = useState(false)
  

/*................getusers1() from database................*/  
const getUsers = async ()=>{
  const data = await getDocs(usersCollectionRef)
                     .then((res)=>{
                       const usersData =  res.docs.map((doc)=>({...doc.data(),id:doc.id}))
                       return usersData
                     })
  // console.log('data',data)
  const document = data.filter((doc1)=>{
    if(doc1.email===user.email)
        return doc1?.id
    })
    // console.log("inside getusers document is ",document)
 return document
}


/*...........................handleClick.....................................*/ 
const handleClick = async () =>{

  const document = await getUsers()
  // console.log(document)
  const id = document[0]?.id
  // console.log("left in shop",document[0].free_trials_left,document[0].premium_user )

  if(document[0].free_trials_left>0||document[0].premium_user){
    if(!document[0].premium_user)
    {
      
      updateUser(user.email,false,1)
      postData()
      setIsLoading(true)
    }
    else if(document[0].premium_user)
    {
      postData()
      setIsPremiumUser(true)
      setIsLoading(true)
    }
   
  }
  else{
    
     navigate('/payment')
   
  }
}
/*...........................end of handleClick.....................................*/ 

/*...........................start of post method.....................................*/ 
const postData = ()=>{
  const data = {
    bullet_point:bullet
  }
  // console.log(data)
  const url = POST_URL
  fetch(url,{
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(data)
        })
        .then(response=>{
          // console.log(response)
          return response.json()
          })
          .then(data=>{
            setPoints(data)
            // console.log(data)
          })
        .catch(e=>console.log(e))
}
/*...........................end of post method.....................................*/   

useEffect(()=>{
    const getUsers1 = async()=>{
              const doc = await getUsers()
              setIsPremiumUser(doc[0]?.premium_user) 
                }
    getUsers1()
               

  },[])

  return (
    <div>
      {/* <Outlet></Outlet> */}
      {outlet||(Object.keys(points).length===0?(<div className="container">
                
                <h2 className="results-header">Resume Bullet Point Optimizer</h2>
                <p className="optimize_paragraph_text">It's as easy as 1, 2, 3:</p>
                <ol>
                  <li>Paste in your resume bullet</li>
                  <li>Press submit</li>
                  <li>Perfect your bullets one by one</li>
                </ol>
                
                <label className="" for="input-bullet">Bullet Point:</label>
                <input className="input-bullet" onChange={(e)=>setBullet(e.target.value)} id="input-bullet" value={bullet} placeholder="Enter a bullet point from your resume" type="text" required></input>
                <button className="submit-btn sub-try-btn" onClick={()=>{handleClick()}}>Submit</button>
                {isLoading&&<ThreeDots 
                      height="80" 
                      width="80" 
                      radius="9"
                      color="#ffffff" 
                      ariaLabel="three-dots-loading"
                      wrapperStyle={{}}
                      wrapperClassName=""
                      visible={true}
                      
                      />}
                      <p>Enjoy 3 free trials of our service, after which a nominal fee is required to access our premium features.</p>

              </div>):
              (<div className="container">
                <h2 className="results-header">Results</h2>
                <div className="card">
                  <div className="card-header">Original Bullet</div>
                  <div className="card-body">
                    <p className="card-text">{bullet}</p>
                  </div>
                </div>
                <div className="pos-cons-feedback">
                  <div className="card card-positive-feedback">
                    <div className="card-header">Positive Feedback</div>
                    <div className="card-body pos-feed-body">
                      <p className="card-text">{points.positive_feedback}</p>
                    </div>
                  </div>
                  <div className="card card-criticism-feedback">
                    <div className="card-header">Constructive Criticism</div>
                    <div className="card-body crit-feed-body">
                      <p className="card-text">{points.negative_feedback}</p>
                    </div>
                </div>
                </div>
                <div className="card">
                  <div className="card-header">Shorter Bullets</div>
                  <div className="card-body">
                    <ul className="list-group">
                      {points['concise_bullets'].split('\n').map(ele=><li className="list-group-item">{ele}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">Similar Bullets</div>
                  <div className="card-body">
                    <ul className="list-group">
                      {points['similar_length_bullets'].split('\n').map(ele=><li className="list-group-item">{ele}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">Longer Bullets</div>
                  <div className="card-body">
                    <ul className="list-group">
                      {points['longer_bullets'].split('\n').map(ele=><li className="list-group-item">{ele}</li>)}
                    </ul>
                  </div>
                </div>

        <Link to="/shop" className="link"><button className="sub-try-btn try-again-btn" onClick={()=>{setPoints({})
                                                                                setIsLoading(false)
                                                                                }}>Try again</button></Link>
              </div>)
              )}
    </div>
    
  )
}

export default Shop