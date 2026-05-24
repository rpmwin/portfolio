import React, { useState } from 'react';

function SkillCard({ icon, skillType }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='w-20 h-20 flex flex-col items-center justify-center bg-neutral-950 rounded-lg border m-4 border-zinc-600 hover:scale-110 transition-all duration-500 relative'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={icon} className='max-w-[80%] duration-700' alt='Skill Icon' />
      {isHovered && (
        <div className='bg-gray-800 text-white text-center p-2 rounded-lg mt-2 duration-700 capitalize'>
          {skillType}
        </div>
      )}
    </div>
  );
}

export default SkillCard;
