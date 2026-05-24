import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="flex justify-center flex-col items-center w-full  bg-black text-white BaseNeutralThin tracking-widest text-lg ">
      <div className='w-4/5 border-t-slate-400 border-t-2 mb-3'></div>
      <span>Crafted and Designed by : <span className='PoppinsSemiBold tracking-widest'>Rishik Puneet M</span></span>
    </div>
  );
}

export default Footer;
