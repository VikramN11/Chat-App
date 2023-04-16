import React from 'react';
import thomas from "../images/image-thomas.jpg"
import emily from "../images/image-emily.jpg";
import jennie from "../images/image-jennie.jpg";

const Chatbar = () => {
  return (
    <div className='chatbar'>
      <div className='useravatar'>
        <img src={thomas} alt="prasad" />
        <div className="msg">
        <span>Prasad Bhoyar</span>
        <p>kya kar raha hai</p>
        </div>
      </div>
      <div className='useravatar'>
        <img src={emily} alt="darwin" />
        <div className="msg">
        <span>Darwin Makadiya</span>
        <p>mumbai indians</p>
        </div>
      </div>
      <div className='useravatar'>
        <img src={jennie} alt="bharat" />
        <div className="msg">
        <span>Prasad Bhoyar</span>
        <p>kya kar raha hai</p>
        </div>
      </div>
      <div className='useravatar'>
        <img src={thomas} alt="pranay" />
        <div className="msg">
        <span>Prasad Bhoyar</span>
        <p>kya kar raha hai</p>
        </div>
      </div>
      <div className='useravatar'>
        <img src={thomas} alt="prasad" />
        <div className="msg">
        <span>Prasad Bhoyar</span>
        <p>kya kar raha hai</p>
        </div>
      </div>
      <div className='useravatar'>
        <img src={emily} alt="darwin" />
        <div className="msg">
        <span>Darwin Makadiya</span>
        <p>mumbai indians</p>
        </div>
      </div>
    </div>
  )
}

export default Chatbar