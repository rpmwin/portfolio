import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavBar from './Components/NavBar';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './Components/Footer';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const div = document.getElementById('cursorDiv');
    const moveDiv = (e) => {
      const divWidth = div.offsetWidth;
      const divHeight = div.offsetHeight;
      div.style.left = e.pageX - divWidth / 2 + 'px';
      div.style.top = e.pageY - divHeight / 2 + 'px';
    };

    document.addEventListener('mousemove', moveDiv);

    return () => {
      document.removeEventListener('mousemove', moveDiv);
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div className="App flex flex-col  items-center min-h-screen w-full h-full bg-black text-white overflow-x-hidden relative">
      <Router>
        <div
          id="cursorDiv"
          className="absolute bg-[#a5515175] w-8 h-8 rounded-full z-10 "
        ></div>
        <NavBar />
        <div className=" flex-grow z-50 ">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/Projects" element={<Projects />} />

            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
        <div className="w-full overflow-hidden">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
