
import { useState } from 'react';
import styles from './App.module.css'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Contact/Footer';
import Experience from './components/Experience/Experience';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import ProjectD from './components/ProjectDetails/Projectdetails';
import ParticleBackground from './particaleBackground';
import zIndex from '@mui/material/styles/zIndex';

function App() {

  const [openModal, setOpenModal] = useState({state: false, project: null});
  console.log("openModal",openModal)
  return (
   <div className={styles.App}>
    <ParticleBackground  />

    <Navbar className={styles.sticky} />
    <div className={styles.body}>
    <Hero/>
    <div className={styles.wrapper}>
    <Skills/>
    </div>

    <Projects setOpenModal={setOpenModal} openModal={openModal} />
    <div className={styles.wrapper}>

    <About/>

    <Experience/>

    <Contact/>
    </div>

    <Footer />

    {openModal.state && <ProjectD openModal={openModal} setOpenModal={setOpenModal} /> }
    </div>
   </div>
  );
}

export default App;
