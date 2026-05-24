import React from 'react';
import './Home.css';
import HeroHeader from '../Components/HeroHeader';
import HeroAbout from '../Components/HeroAbout';
import HeroSkills from '../Components/HeroSkills';
import { NavLink } from 'react-router-dom';

NavLink

function Home() {
  return (
    <div className=" w-screen  ">
      <HeroHeader />
      <HeroAbout />
      <div className='flex justify-center '>
        <HeroSkills />
      </div>
      <div className='flex justify-center mb-12'>
        <NavLink to={'/Projects'} className={`bg-slate-900 w-[200px]  p-3 m-2 rounded-lg text-2xl hover:scale-105 duration-500 text-center border  border-zinc-600`}>PROJECTS</NavLink>
        <NavLink to={'/Contact'} className={`bg-slate-900 w-[200px]  p-3 m-2 rounded-lg text-2xl hover:scale-105 duration-500 text-center border  border-zinc-600`}>CONTACT</NavLink>
      </div>
    </div>
  );
}

export default Home;
