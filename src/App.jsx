import './styles/app.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Journey from './components/journey';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Journey/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
