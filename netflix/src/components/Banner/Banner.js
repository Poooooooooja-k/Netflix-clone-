import React, { useEffect } from 'react'
import { API_KEY } from '../../constants/Constants'
import './Banner.css'
import Axios from '../../Axios'
const Banner = () => {
    useEffect=(()=>{
        Axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response=>{
            console.log(response.data)
        }))
        }
     ,[])
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
