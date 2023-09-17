import React from 'react'
import {Link} from 'react-router-dom'
import {useState,useRef,useEffect} from 'react'
import { UserAuth } from '../context/AuthContext'
import {useNavigate} from 'react-router-dom'

const Header = () => {
  const[hamburgerClick,setHamburgerClick] = useState(false)
  const hamburgerRef = useRef(null)
  const headernavmenuRef = useRef(null)
  const{user,logOut} = UserAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const handleClick = event => {
      // console.log('hamburger button clicked')
      element.classList.toggle("active")
      element1.classList.toggle("active")
 
    }

    const element = hamburgerRef.current
    const element1 = headernavmenuRef.current

    element.addEventListener('click', handleClick)

    return () => {
      element.removeEventListener('click', handleClick)
      element1.removeEventListener('click', handleClick)
    }
  }, [])

  const handleSignOut = async()=>{
    try{
      
      await logOut()
      navigate('/')
    }
    catch(error)
    {
      console.log(error)
    }
  }

  return (
    <div className="header-navbar">
       <div className="header-title">
         <Link to="/" className="link">
          <h1>CeeVee</h1>
          </Link>
        </div>
        <div className="headernav-menu"  ref={headernavmenuRef}>
          <ul className="nav_menu">
            <li><Link to="/faq" key={1} className="link">FAQ</Link></li>
            <li><Link to="/contact" key={2} className="link">Contact</Link></li>
            <li>{user?.displayName?<button className="signout-btn"onClick={handleSignOut}>Logout</button>:
            <Link to="/signin" key={3} className="link">Sign In</Link> } </li>
          </ul>
        </div>
        <div className="hamburger" ref={hamburgerRef}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
    </div>
  )
}

export default Header
