import React from "react";
import styles from "./Hero.module.css";
import myImage from "../images/myphoto.jpg";
function Hero() {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I am <br />
          Shrikant Jakanur
        </h1>
        <p className={styles.discription}>
          I'm a <divv>MERN-stack developer.</divv>
        </p>
        <p className={styles.discriptionnn}>
          I am a motivated and versatile individual, always eager to take on new
          challenges. With a passion for learning I am dedicated to delivering
          high-quality results. With a positive attitude and a growth mindset, I
          am ready to make a meaningful contribution and achieve great things.
        </p>
        <button
          onClick={() =>
            (window.location.href = "https://drive.google.com/file/d/18yA6qsPq63umOnT1HAH2gnTOSurCm1Wy/view?usp=drive_link")
          }
          className={styles.contactbtn}
        >
          Check Resume
        </button>
      </div>

      <div className={styles.heroRightContainer} id="Right">
        <img src={myImage} className={styles.imagesss} alt="hero-image" />
      </div>
    </section>
  );
}

export default Hero;
