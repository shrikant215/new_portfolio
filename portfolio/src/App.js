
import styles from './App.module.css'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Contact/Footer';
import Experience from './components/Experience/Experience';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';


function App() {
  return (
   <div className={styles.App}>
    <Navbar className={styles.sticky} />
    <Hero/>
    <Skills/>
    <About/>
    <Projects/>
    <Experience/>
    {/* <Contact/> */}
    <Footer/>
   </div>
  );
}

export default App;
