import React from 'react'

const Inputchat = () => {
  return (
    <div className='inputchat'>
        <input type="text" placeholder='Type something...' />
        <div className='send'>
        <i class="fa-solid fa-paperclip"></i>
        <i class="fa-solid fa-image"></i>
        <button>Send</button>
        </div>
    </div>
  )
}

export default Inputchat