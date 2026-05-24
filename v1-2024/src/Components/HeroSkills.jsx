import React from 'react'
import html from "../assets/SkillsIcons/html.svg"
import css from "../assets/SkillsIcons/css.svg"
import js from "../assets/SkillsIcons/javascript.svg"
import typescript from "../assets/SkillsIcons/typescript.svg"
import react from "../assets/SkillsIcons/react.svg"
import next from "../assets/SkillsIcons/nextjs.svg"
import tailwind from "../assets/SkillsIcons/tailwind.svg"
import git from "../assets/SkillsIcons/git.svg"
import github from "../assets/SkillsIcons/github.svg"
import motion from "../assets/SkillsIcons/motion.svg"
import redux from "../assets/SkillsIcons/redux.svg"
import shadcn from "../assets/SkillsIcons/shadcnui.svg"
import threejs from "../assets/SkillsIcons/threejs.svg"
import vite from "../assets/SkillsIcons/vite.svg"
import nodejs from "../assets/SkillsIcons/nodejs.svg"
import figma from "../assets/SkillsIcons/figma.svg"
import appwrite from "../assets/SkillsIcons/appwrite.svg"
import cpp from "../assets/SkillsIcons/cpp.webp"
import SkillCard from './SkillCard'


function HeroSkills() {
  const Skills = [
    { icon: html, type: 'HTML' },
    { icon: css, type: 'CSS' },
    { icon: js, type: 'JavaScript' },
    { icon: typescript, type: 'TypeScript' },
    { icon: react, type: 'React' },
    { icon: next, type: 'Next.js' },
    { icon: tailwind, type: 'Tailwind' },
    { icon: git, type: 'Git' },
    { icon: github, type: 'GitHub' },
    { icon: motion, type: 'Motion' },
    { icon: redux, type: 'Redux' },
    { icon: shadcn, type: 'Shadcn' },
    { icon: threejs, type: 'Three.js' },
    { icon: vite, type: 'Vite' },
    { icon: nodejs, type: 'Node.js' },
    { icon: figma, type: 'Figma' },
    { icon: appwrite, type: 'Appwrite' },
    { icon: cpp, type: 'C++' },

  ];

  return (
    <div className='w-[50%]  h-max my-5 left-5 grid grid-cols-6 justify-center items-center'>
      {Skills.map((skill, index) => (
        <SkillCard key={index} icon={skill.icon} skillType={skill.type} />
      ))}
    </div>
  );
}

export default HeroSkills