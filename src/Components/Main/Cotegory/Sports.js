import React from 'react'
import { MdOutlineSportsKabaddi } from "react-icons/md";
import { MdOutlineSportsMartialArts } from "react-icons/md";
import { GiBoxingGlove } from "react-icons/gi";
import { MdSportsMma } from "react-icons/md";
import { Link } from 'react-router-dom';

function Sports() {
  return (
    
    <div className='sports'>
      <div className="container">
        <div className="sports__species">
          <div><Link to='/ММА' className='sports__species-text'><MdSportsMma /> ММА</Link></div>
          <div><Link to='/Борьба' className='sports__species-text'><MdOutlineSportsKabaddi/> Борьба </Link></div>
          <div><Link to='/Бокс' className='sports__species-text'><GiBoxingGlove /> Бокс </Link></div>
          <div><Link to='/Тхэквандо' className='sports__species-text'><MdOutlineSportsMartialArts/> Тхэквандо </Link></div>
          <div><Link to='/Самбо' className='sports__species-text'><MdOutlineSportsKabaddi/> Самбо </Link></div>
          <div><Link to='/Дзюдо' className='sports__species-text'><MdOutlineSportsKabaddi/> Дзюдо </Link></div>
          <div><Link to='/Греко-Римская-Борьба' className='sports__species-text'><MdOutlineSportsKabaddi/> Греко-римская борба</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Sports
