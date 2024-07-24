
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Education from './components/education/Education';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Skills from './components/skills/Skills';




function App() {
  return (
    <>
   <Header/>
    <Skills/>
    <About/> 
   <Education/>
   <Contact/>
   <Footer/> 
   </>
  );
}

export default App;
