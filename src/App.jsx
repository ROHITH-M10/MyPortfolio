import './styles/app.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Journey from './components/journey';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';


import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { CursorifyProvider } from '@cursorify/react'



function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,        // Animations run for 1200ms
      easing: 'ease-in-out', // Smooth easing
      offset: 100,           // Trigger when element is 100px from viewport
      once: false,           // Animation will run every time you scroll
      mirror: true,          // Animate when scrolling back
      delay: 300,            // 300ms delay for all animations
      anchorPlacement: 'center-bottom', // Anchor element at the center-bottom
    });
  }, []);
  

  return (
    <div className="App">
      <CursorifyProvider>
      <Navbar/>
      <Home/>
      <About/>
      <Journey/>
      <Projects />
      <Contact />
      <Footer />
      </CursorifyProvider>
    </div>
  );
}

export default App;
