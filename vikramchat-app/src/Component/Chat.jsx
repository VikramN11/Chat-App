import React from 'react'
import Navbarchat from './Navbarchat'
import Messages from './Messages'
import Inputchat from './Inputchat'

const Chat = () => {
  return (
    <div className="chat">
      <Navbarchat />
      <Messages />
      <Inputchat />
    </div>
  )
}

export default Chat