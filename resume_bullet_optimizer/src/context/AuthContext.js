import {useContext,createContext, useEffect,useState} from 'react'
import React from 'react'
import { 
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged,
    getAdditionalUserInfo
    } from "firebase/auth";
import {auth} from '../components/Firebase'
/*database imports*/

import {db} from '../components/Firebase'
import {collection, getDocs, addDoc,updateDoc,doc,deleteDoc} from 'firebase/firestore'

/* end of database imports*/


const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{

/* Authentication variables*/ 
    const[user,setUser] = useState({user:'nothing'})//authentication
    const[userEmail,setUserEmail] = useState("")
/*Database variables*/ 
    const[userDataFromDb,setUserDataFromDb] = useState([])
    const usersCollectionRef = collection(db,"users")
    const[newUser,setNewUser] = useState()
    const[newPremiumUser,setnewPremiumUser] = useState()
    const[newFreeTrials,setNewFreeTrials] = useState()
    
/* Payment token*/ 
    const [paymentStatus,setPaymentStatus] = useState("")

/* Authentication functionality*/

    const googleSignIn = async()=>{
        const provider = new GoogleAuthProvider();
        // console.log('user',user)
        //console.log("authcontext page before isnewuser",result)
        const isNewUser = await signInWithPopup(auth, provider)
                            .then((result) => {
                                const details = getAdditionalUserInfo(result)
                                //console.log("result",result)
                                // console.log("Name is",result.user.displayName);
                                // console.log(details)
                                
                                // setUser(result.user)
                                setUserEmail(result.user.email)
                                
                                return details
                                })
      .catch((error) => {
        console.log(error);
      });
         
        
        return isNewUser
        
    }

    const logOut = ()=>{
        // console.log('user',user)
        signOut(auth)
    }
/* end of authentication*/

/* Database functionality*/

    const createUser = async(userName,emailId)=>{
        // console.log("create user",userName)
        await addDoc(usersCollectionRef,{email:emailId,name:userName,premium_user:false,free_trials_left:3})
    }

    const getUsers1 = async ()=>{
        const data = await getDocs(usersCollectionRef)
                           .then((res)=>{
                             const usersData =  res.docs.map((doc)=>({...doc.data(),id:doc.id}))
                             return usersData
                           })
        // console.log('data',data)
       return data
     }


    const updateUser = async(email,premium_user,token)=>{
            const dataFromDb = await getUsers1()
            // console.log("inside update user users data",dataFromDb)
            // console.log("useremail is ",userEmail)
            const document = dataFromDb.filter((doc1)=>{
                if(doc1.email===userEmail)
                    return doc1.id
            })
            
            // console.log(document[0])
            const id = document[0].id
            // console.log("document id is ",id)
            const userDoc = doc(db,"users",id)//to get a speicific document
            const newFileds = token?{premium_user:premium_user,free_trials_left:document[0].free_trials_left-1}
                                    :{premium_user:premium_user,free_trials_left:document[0].free_trials_left}
            await updateDoc(userDoc,newFileds)
    }

    const deleteUser = async(id)=>{
        const userDoc = doc(db,"users",id)//to get a speicific document
        await deleteDoc(userDoc)
    }

/*End of database*/ 

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
           setUser(currentUser)
           
        })

        /*Database*/
        const getUsers = async ()=>{
            const data = await getDocs(usersCollectionRef)
            // console.log('data',data)
            setUserDataFromDb(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
            
        }
        getUsers()

        /*end of database*/
        
        return ()=>{
            unsubscribe()
        }
    },[])

    return (
        <AuthContext.Provider value={{googleSignIn,logOut,user,userDataFromDb,createUser,updateUser,getUsers1}}>
            {children}
        </AuthContext.Provider>
    )

}

export const UserAuth = ()=>{
    return useContext(AuthContext)
}