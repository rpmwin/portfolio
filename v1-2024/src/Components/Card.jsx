import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import { NavLink } from 'react-router-dom'
import external_link from '../assets/icons/arrow.svg'

function Card({
  category,
  link,
  icon
}) {
  return (
    <div className='     bg-slate-700 w-[400px] mx-auto p-3 m-2 rounded-lg text-2xl hover:scale-105 duration-500 text-center'  >
      <NavLink to={link} className={`flex  text-center justify-around items-center`} >
        <img src={icon} alt={category} className='w-[68px]' />
        <h1 className='flex gap-5 ImPrisha '>{category} <img src={external_link} alt="external link" className='w-[25px] ' /></h1>

      </NavLink>
    </div>
  )
}

export default Card