import React from 'react';
import Card from '../Components/Card';
import github from '../assets/icons/gihub.png';
import linkedin from '../assets/icons/linkedin.png';
import discord from '../assets/icons/discord.svg';
import facebook from '../assets/icons/facebook.svg';
import twitter from '../assets/icons/Twitter.png';
import gmail from '../assets/icons/gmail.svg';


function Contact() {
  const allSocialMediaLinks = [
    {
      category: 'Gmail',
      icon: gmail,
      link: 'mailto:rishikpuneetm@gamil.com',
    },
    {
      category: 'Github',
      icon: github,
      link: 'https://github.com/rpmwin',
    },
    {
      category: 'Linkedin',
      icon: linkedin,
      link: 'https://www.linkedin.com/in/rishik-puneet-m-125261229/',
    },
    {
      category: 'Facebook',
      icon: facebook,
      link: 'https://www.facebook.com/',
    },
    {
      category: 'Twitter',
      icon: twitter,
      link: 'https://twitter.com/',
    },
    {
      category: 'Discord',
      icon: discord,
      link: 'https://discord.com/',
    },
  ];

  return (
    <div className="text-center flex flex-col items-center justify-center w-full h-full">
      <div className="BaseNeutralBig text-6xl tracking-wider m-8 text-lime-500">CONTACT - ME</div>
      <div className="text-2xl">
        Let's Connect and build something <span className="font-bold text-3xl text-[#96a551]">COOL</span> together
      </div>
      <div className="flex flex-wrap justify-center">
        {allSocialMediaLinks.map((link, index) => (
          <div key={index} className="w-1/2 p-2 ">
            <Card category={link.category} icon={link.icon} link={link.link} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
