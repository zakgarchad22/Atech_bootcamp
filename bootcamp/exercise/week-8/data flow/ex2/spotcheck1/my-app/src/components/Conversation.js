import React from 'react';

const Conversation = ({ convo, sender }) => {
  return (
    <div>
      {
      convo.map((message, index) => 
      {
        let senderName = ""
        if (message.sender === 'self') 
        {
          senderName = 'Me'
        } else 
        {
          senderName = sender
        }

    return (
          <div key={index}>
            <span className="sender">{senderName}</span>: {message.text}
          </div>
        )
      })
      }
    </div>
  )
}

export default Conversation
