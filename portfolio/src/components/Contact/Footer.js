import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import style from './Contact.module.css';  // Import the CSS file
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className={style.footerContainer}>

      <div className={style.midStyle}></div>
      <div className={style.footerWrapper}>
        <div className={style.logo}>Shrikant Jakanur</div>
        <nav className={style.nav}>
          <Link className={style.navLink} to="about" smooth={true} duration={500}>About</Link>
          <Link className={style.navLink} to="skills" smooth={true} duration={500}>Skills</Link>
          <Link className={style.navLink} to="experience" smooth={true} duration={500}>Experience</Link>
          <Link className={style.navLink} to="projects" smooth={true} duration={500}>Projects</Link>
          <Link className={style.navLink} to="education" smooth={true} duration={500}>Education</Link>
        </nav>
        <div className={style.socialMediaIcons}>
          <a className={style.socialMediaIcon} href="https://facebook.com" target="display"><FacebookIcon /></a>
          <a className={style.socialMediaIcon} href="https://twitter.com" target="display"><TwitterIcon /></a>
          <a className={style.socialMediaIcon} href="https://www.linkedin.com/in/shrikant-jakanur-215215shri?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="display"><LinkedInIcon /></a>
          <a className={style.socialMediaIcon} href="https://www.instagram.com/shrikant_215?utm_source=qr&igsh=NXAxb3p2c3VuaTRk" target="display"><InstagramIcon /></a>
        </div>
        <p className={style.copyright}>
          &copy; 2024 Shrikant Jakanur.
        </p>
      </div>
    </div>
  );
}

export default Footer;
