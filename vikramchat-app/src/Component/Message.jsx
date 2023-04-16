import React from 'react';
import thomas from "../images/image-thomas.jpg";
import cone from "../images/image-gallery-cone.jpg"

const Message = () => {
  return (
    <div className='message owner'>
        <div className='messageavatar'>
            <img src={thomas} alt="thomas" />
            <span>just now</span>
        </div>
        <div className='messagecontent'>
            <p>Hello</p>
            <img src={cone} alt="cone" />
        </div>
    </div>
  )
}

export default Message