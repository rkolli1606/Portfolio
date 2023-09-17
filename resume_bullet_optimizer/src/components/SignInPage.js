import React, { useEffect } from 'react'
import GoogleButton from 'react-google-button'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import {useNavigate} from 'react-router-dom'

const SignInPage = () => {
    const {googleSignIn,user,createUser} = UserAuth()
    const navigate = useNavigate()

    const handleGoogleSignIn = async()=>{
        try{
            const user =  await googleSignIn()
            const {isNewUser,emailid} = user
            const userName = user.profile.name
            const emailId = user.profile.email
            if(isNewUser){
            // {   console.log(" signin page inside a new user")
                createUser(userName,emailId)
            }
            else{
                // console.log("signin page not a new user")
                
            }


        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        if(user!=null)
            navigate('/')
    },[user])
  return (
    <div>
        <h1 className="signin_heading">Sign In with Google</h1>
        <GoogleButton className="google_signin_btn"
            onClick={handleGoogleSignIn}
        />
    </div>
  )
}

export default SignInPage