import React from 'react'
import { auth } from '../firebase'

const style = {
  message: ` MessageDiv`,
  Sent:' Sent',
  received:` Received`
}
const Message = ({message }) => {
  const messageClass = 
  message.uid === auth.currentUser.uid
  ? `${style.Sent}`
  : `${style.received}`
  return (
    <div>
        <div className={`${style.message} ${messageClass}`}>
            <p className='User-Name'>{message.name}</p>
            <p>{message.text}</p>
            
        </div>
    </div>
  )
}

export default Message