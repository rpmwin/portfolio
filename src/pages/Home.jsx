import { Hero } from '../components/home/Hero';
import { Skills } from '../components/home/Skills';
import { Experience } from '../components/home/Experience';
import { Projects } from '../components/home/Projects';
import { Contact } from '../components/home/Contact';

export const Home = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};
