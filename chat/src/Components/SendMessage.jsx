import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import {auth,db} from '../firebase'

const SendMessage = () => {

const [input, setInput] = useState('')    

const sendMessage = async (e) => {
    e.preventDefault()
    const {uid, displayName} = auth.currentUser
    await addDoc(collection(db, 'Messages'), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp()
    })

}
  return (
    <form onSubmit={sendMessage} className='SendMassageForm'>
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" className='MessageInput' placeholder='Message' />
        <button type="submit" className='BtnForSend'>Send</button>
    </form>
  )
}

export default SendMessage