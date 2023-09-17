import { doc } from 'firebase/firestore'
import React from 'react'
import{Navigate,useNavigate} from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'
import {db} from '../components/Firebase'
import {collection, getDocs, addDoc,updateDoc,deleteDoc} from 'firebase/firestore'

const Protected = ({children}) => {
    const{user} = UserAuth()
    
    if(!user){
        return <Navigate to='/' />
    }
  return children
    
  
}

const Protected1 = ({children}) =>{
  const{user,userDataFromDb,updateUser} = UserAuth()
  const navigate = useNavigate()
  const usersCollectionRef = collection(db,"users")

  const getUsers1 = async ()=>{
    const data = await getDocs(usersCollectionRef)
                       .then((res)=>{
                         const usersData =  res.docs.map((doc1)=>({...doc1.data(),id:doc1.id}))
                         return usersData
                       })
    // console.log('data',data)
    const document = data.filter((doc1)=>{
      if(doc1.email===user.email)
          return doc1.id
      })
    // console.log(document)
    const id = document[0].id
    // console.log("left",document[0].free_trials_left,document[0].premium_user )
    if(!document[0].free_trials_left||!document[0].premium_user){
      if(!document[0].premium_user&&document[0].free_trials_left===0)
      {
        // console.log("inside protected one")
          //updateUser(user.email,false,1)
          return <Navigate to='/' />
      }
      
    }
   
 }


  return children

}

export {Protected,Protected1} 