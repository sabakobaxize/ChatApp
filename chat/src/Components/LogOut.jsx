import React from 'react'
import { auth, signOut } from '../firebase'



const LogOut = () => {
    const signOut = () => {
       signOut(auth)
    }
  return (
    <button onClick={() => auth.signOut()} className="logout">LogOut</button>
  )
}

export default LogOut