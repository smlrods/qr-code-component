import { useState } from 'react'
import './Card.css'

function Card() {
  return (
    <div id='card' >
      <div className='qrcode'></div>
      <div className='main'>
        <h2>Improve your front-end skills by building projects</h2>
        <div className='description'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</div>
      </div>
    </div>
  )
}

export default Card;
