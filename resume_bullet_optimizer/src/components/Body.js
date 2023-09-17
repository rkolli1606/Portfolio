import React from 'react'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import PeopleReviews from './PeopleReviews'
import { UserAuth } from '../context/AuthContext'
import Emiliano_Before_and_After from '../images/Emiliano_Before_and_After.png'
import Harrison_Before_and_After from '../images/Harrison_Before_and_After.png'
import Body_Image1 from '../images/Body_Image1.png'
import Body_Image3 from '../images/Body_Image3.png'
import Body_Image2 from '../images/Body_Image2.png'


const Body = () => {
  const[signIn,setSignIn] = useState(false)
  const {user} = UserAuth()

  useEffect(()=>{
    if(user!=null)
      setSignIn(true)
    else
    setSignIn(false)  
  },[user])
  

  return (
    <div>
        <div id="slider">
          <div id="figures">
            <img src = {Harrison_Before_and_After} loading="lazy" width="731" sizes="(max-width: 479px) 90vw, (max-width: 767px) 100vw, (max-width: 991px) 728px, 731px"/>
            <img src = {Emiliano_Before_and_After} loading="lazy" width="731" sizes="(max-width: 479px) 90vw, (max-width: 767px) 100vw, (max-width: 991px) 728px, 731px"/>
            <img src = {Harrison_Before_and_After} loading="lazy" width="731" sizes="(max-width: 479px) 90vw, (max-width: 767px) 100vw, (max-width: 991px) 728px, 731px"/>
            <img src = {Emiliano_Before_and_After} loading="lazy" width="731" sizes="(max-width: 479px) 90vw, (max-width: 767px) 100vw, (max-width: 991px) 728px, 731px"/>
          </div>
        </div>
        <div className="content">
          <h1>Build a resume that works for you</h1>
          <p className="content-text">Empower yourself: handpick every word to put your best foot forward</p>
          {signIn?<Link to="/shop" className='link'> 
          <div className="btn">Get Started</div></Link>:
          <Link to="/signin" className='link'> 
          <div className="btn">Get Started</div></Link>}
          {signIn?<p className="signin_text">Welcome {`${user?.displayName}`}</p>:""}
          <div className="body-container">
            <div id="howitworks" className="bodyitemcontainer w-container">
              <img src={Body_Image1} loading="lazy"  className='harrison-img image1'/>
              <div className="bodytextcontainer">
                <h2 className="bodyitemheader">1. Upload Your Resume Bullet</h2>  
              </div>
            </div>
            <div className="bodyitemcontainer-b w-container">
              <img src={Body_Image2} loading="lazy"  className='harrison-img image2'/>
              <div className="bodytextcontainer-b">
                <h2 className="bodyitemheader-b">2. Re-Imagine Your Bullets One By One </h2>
              </div>
            </div>
            <div className="bodyitemcontainer-b w-container">
              <img src={Body_Image3} loading="lazy" className='harrison-img image3'/>
              <div className="bodytextcontainer-b">
                <h2 className="bodyitemheader-b">3. Perform a Sanity Check</h2> 
              </div>
            </div>
          </div>
          {signIn?<Link to="/shop" className='link'> 
          <div className="btn">Get Started</div></Link>:
          <Link to="/signin" className='link'> 
          <div className="btn">Get Started</div></Link>}
        </div>
          <p className="reviews_header">Reviews By Satisfied Customers</p>
          <PeopleReviews/>
    </div>    
  )
}

export default Body

/* width="435" sizes="(min-width: 479px) 20vw, (min-width: 767px) 0vw, (max-width: 991px) 200px" */