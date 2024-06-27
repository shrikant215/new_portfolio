import React from 'react';
import { getImageUrl } from '../../utils/Theams'; // Adjust the path to match your project structure
import styles from './Hero.module.css'
function Hero() {
  
  return (
    <section className={styles.container} id='about'>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am <br />
        Shrikant Jakanur</h1>
        <p className={styles.discription}>
          I'm a <divv>full-stack developer.</divv>
        </p>
        <p className={styles.discriptionnn}>
        I am a motivated and versatile individual, always eager to take on new challenges.<br/> With a passion for learning I am dedicated to delivering high-quality results.<br/> With a positive attitude and a growth mindset, I am ready to make a meaningful <br/> contribution and achieve great things. 
        </p>
        <a href='https://bronze-gussy-32.tiiny.site' className={styles.contactbtn}>Check Resume</a>
      </div>
      {/* <img src={getImageUrl("Hero/heroimage.png")} alt='hero image of me' /> */}
      <div className={styles.toBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}

export default Hero;
