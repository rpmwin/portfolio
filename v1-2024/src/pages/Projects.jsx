import React from 'react';
import ProjectCard from '../Components/ProjectCard';
import hangman from "./hangman.png"
import ticTacToe from "./tic-tac-toe.png"
import portfolio from "./Portfolio.png"
import currency from "./currency.png"
import climate from "./climate.png"

const projectsData = [
  {
    name: 'Tic-Tac-Toe',
    image: ticTacToe,
    description:
      'This project is a tic tac toe game. Created using React , we can learn props , and some different hooks in react. ',
    gitHubLink: 'https://github.com/rpmwin/tic-tac-toe',
    liveLink: 'https://rpm-tictactoe.netlify.com/',
    Stack: ['React', 'Tailwindcss'],
  },
  {
    name: 'Portfolio',
    image: portfolio,
    description:
      'This project is a portfolio website. In this project I have used react and tailwind , it is responsive. we can learn about  dynamic routing  in react.',
    gitHubLink: 'https://github.com/rpmwin/RPM-Portfolio',
    liveLink: 'https://rpm-portfolio.netlify.com/',
    Stack: ['Tailwindcss', 'Vite', 'Netlify', 'React-router-dom'],
  },
  {
    name: 'Hangman-Game',
    image: hangman,
    description:
      'This is a Hangman game. By this project I have learned about hooks , state management in react. ',
    gitHubLink: 'https://github.com/rpmwin/hangman',
    liveLink: 'https://rpm-hangman.netlify.com/',
    Stack: ['React', 'Tailwindcss'],
  },
  {
    name: 'Currency-Converter-App',
    image: currency,
    description:
      'This is a Currency Converter App. we can learn API mangement , state management in react.',
    gitHubLink: 'https://github.com/rpmwin/currency-converter',
    liveLink: 'https://rpm-currency-converter.netlify.com/',
    Stack: ['React', 'Api', 'Vite', 'Netlify'],
  },
  {
    name: 'Weather-App',
    image: climate,
    description:
      'This is a Weather App. we can learn API mangement , searching and recieving data dynamically in react.',
    gitHubLink: 'https://github.com/rpmwin/weather-app',
    liveLink: 'https://rpm-weather-app.netlify.com/',
    Stack: ['React', 'Api', 'Vite', 'Netlify'],
  },
];

function ProjectsComponent() {
  return (
    <div className="flex flex-col text-center w-[100%] items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="text-8xl BaseNeutralBig m-8 tracking-wider text-emerald-600">
          PROJECTS
        </div>
        <p className="PoppinsThin font-semibold tracking-wider w-3/5">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>
      <div className="grid grid-cols-3 m-10 mx-auto items-center justify-center text-center w-screen">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            image={project.image}
            description={project.description}
            gitHubLink={project.gitHubLink}
            liveLink={project.liveLink}
            Stack={project.Stack}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsComponent;
