import React from 'react'
import "../index.css";

function HeroHeader() {
  function DownloadResume() {
    console.log('helloWorld');
  }
  return (
    <div>
      <header className="w-screen relative scroll left-[150px] top-[50px] h-[500px]  text-left z-1">
        <div className="mb-4">
          <span className="text-4xl  ">
            <span className="font-bold text-lime-500">Hey !!</span> , My Self{' '}
          </span>
        </div>
        <div className="m-5">
          <span className="text-8xl BaseNeutralBig tracking-wider text-sky-500">
            RISHIK PUNEET M
          </span>
        </div>
        <div className='z-10'>
          <span className="text-5xl text-slate-300 flex w-max overflow-hidden rounded">
            <div className='mr-5'>
              <span> I'm a </span>
            </div>
            <div className='dynamicText text-rose-500 '>
            <ul>
              <li>
                <span className=''> Front- End -Developer </span>
              </li>
              <li>
                <span> Back - End -Devoloper </span>
              </li>
              <li>
                <span> Full Stack -Devoloper </span>
              </li>
              <li>
                <span>Engineer </span>
              </li>
              <li>
                <span> Enthusiastic </span>
              </li>
            </ul>
            </div>
            
          </span>
        </div>
        <button className='text-2xl  mt-5 bg-lime-500 rounded-3xl text-black p-3 font-medium hover:bg-lime-700 hover:text-[#f1f1f1] z-50 mr-10' onClick={DownloadResume}>Download Resume</button>
        <button className='text-2xl  mt-5 bg-white rounded-3xl text-black p-3 font-medium hover:bg-lime-700 hover:text-[#f1f1f1] z-50 px-16' onClick={DownloadResume}>Explore</button>
      </header>
    </div>
  )
}

export default HeroHeader