import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import {auth,db} from '../firebase'

const SendMessage = ({scroll}) => {

const [input, setInput] = useState('')    

const sendMessage = async (e) => {
    e.preventDefault()
    if(input === ''){
        alert('please enter a valid message')
        return 
    }
    const {uid, displayName} = auth.currentUser
    await addDoc(collection(db, 'messages'), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp()
    })
    setInput('')
    scroll.current.scrolIntoView({behavior: 'smooth'})

}
  return (
    <form onSubmit={sendMessage} className='SendMassageForm'>
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" className='MessageInput' placeholder='Message' />
        <button type="submit" className='BtnForSend'>Send</button>
    </form>
  )
}

export default SendMessage