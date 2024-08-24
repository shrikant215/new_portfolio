import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import style from './Contact.module.css';  // Import the CSS file

function Footer() {
  return (
    <div className={style.footerContainer}>

      <div className={style.midStyle}></div>
      <div className={style.footerWrapper}>
        <div className={style.logo}>Shrikant Jakanur</div>
        <nav className={style.nav}>
          <a className={style.navLink} href="#about">About</a>
          <a className={style.navLink} href="#skills">Skills</a>
          <a className={style.navLink} href="#experience">Experience</a>
          <a className={style.navLink} href="#projects">Projects</a>
          <a className={style.navLink} href="#education">Education</a>
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
