import React from 'react'

const Message = ({message}) => {
  return (
    <div>
        <div className="MessageDiv">
            <p className='User-Name'>David</p>
            <p>{message.text}</p>
            
        </div>
    </div>
  )
}

export default Message