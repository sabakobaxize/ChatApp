import React from 'react';
import SignIn  from './signIn'
import LogOut from './LogOut'
import {auth} from '../firebase'
import{useAuthState} from 'react-firebase-hooks/auth'

const style = {
    nav:` bg-gray-800 h-20 flex justify-between items-center p-4`,
    heading: ` text-white text-3xl`
}
const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
  return (
  
    
        <div className='navbardiv'>
        <h1 className='navbar-Heading'> Chat App</h1>
        {user ? <LogOut /> : <SignIn />}
      
        </div>
   
  )
}

export default Navbar;