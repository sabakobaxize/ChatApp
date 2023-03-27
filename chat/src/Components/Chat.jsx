import { collection, query } from 'firebase/firestore';
import React, {useState, useEffect, useRef} from 'react'
import Message from './Message'


const Chat = () => {
    const {Messages, setMessages} = useState([]);
    const scroll = useRef() 
useEffect(() => {
const q  = query(collection(db,'messages'),)
},[])

  return (
    <>
    <main className='MainForChat'>
     {/* Chat Message Component */}
     <Message />
    </main>
    {/* Send Message Component */}
    <span ref={scroll}></span>
    </>
  )
}

export default Chat