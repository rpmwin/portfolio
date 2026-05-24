import React from 'react';
import { Link } from 'react-router-dom';
import rpm from './RPM3.svg';
import arrowsvg from './arrow.svg';

function ProjectCard({
  name,
  image,
  description,
  gitHubLink,
  liveLink,
  Stack,
}) {
  return (
    <div className="flex flex-col items-center justify-center justify hover:scale-105 duration-500">
      <div className="flex flex-col items-center justify-center w-[400px]  h-full mx-auto px-3 my-4 bg-neutral-950 border  border-slate-800 rounded-lg">
        <div className=" m-2 w-full rounded text-left   flex items-center border-b">
          <div>
            <img src={rpm} className="w-[40px] mr-4 "></img>
          </div>
          <div>
            <h1 className="text-2xl text-white PoppinsSemiBoldItalic m-2">
              {name}
            </h1>

            <Link
              className="text-sm text-lime-400 font-sbold "
              target="_blank"
              to={liveLink}
            >
              {liveLink}
            </Link>
          </div>
        </div>
        <div className="m-2">
          <img src={image} alt="" />
          <div className='my-5'>{description}</div>
          <div className="flex gap-2 bottom-0 flex-wrap">
            {Stack.map((e, index) => (
              <p
                key={index}
                className="bg-slate-800 text-white p-2 m-2 rounded-lg h-min"
              >
                {e}
              </p>
            ))}
          </div>
        </div>
        <div className="m-2 mt-8 p-4 w-full border-t text-xl">
          <Link
            to={gitHubLink}
            target='_blank'
            className="flex items-center justify-center text-blue-700"
          >
            Visit source code on GitHub{' '}
            <img src={arrowsvg} width={25} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
