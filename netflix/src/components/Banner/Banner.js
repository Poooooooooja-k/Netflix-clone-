import React from 'react'
import './Banner.css'
const Banner = () => {
  return (
    <div className='banner'>
      <div className='content'>
        <h1 className='title'>ELITE</h1>
        <div className='banner-btns'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</h1>
      </div>
      <div className="fade_bottom"></div>

    </div>
  )
}

export default Banner
