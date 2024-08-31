
import React,{useState} from "react";
import styles from "./Navbarrrr.module.css";
import {DiCssdeck} from "react-icons/di"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-scroll";


function Navbar() {
    const[menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className={`${styles.nav} ${styles.navbar}`}>
      <div className={styles.navConatiner}>
        <div className={styles.navlogo} to='/'>
            <DiCssdeck size='3rem' /><span>Portfolio</span>
        </div>
        <menu className={styles.mobileIcon} >
            <div className={styles.hidemenubtn}>
        {!menuOpen ? (
                 <MenuIcon className={styles.menubtn} onClick={() => setMenuOpen(!menuOpen)} />
                        ):(
                            <CloseIcon onClick={() => setMenuOpen(!menuOpen)}/>
                        )}
                        </div>
        <div className={`${styles.navItems} ${menuOpen && styles.menuOpenn}`} onClick={()=>setMenuOpen(false)}>
          <Link className={styles.aLinks} to="about" smooth={true} duration={500}>About</Link>
          <Link className={styles.aLinks} to="skills" smooth={true} duration={500} >Skills</Link>
          <Link className={styles.aLinks} to="projects" smooth={true} duration={500} >Project</Link>
          <Link className={styles.aLinks} to="education" smooth={true} duration={500} >Eduction</Link>
          <Link className={styles.aLinks} to="experience" smooth={true} duration={500} >Experience</Link>
        </div>
        </menu>
        <div className={styles.buttoncontainer}>
          <div className={styles.githubbutton} onClick={() => window.location.href = "https://github.com/shrikant215"}>Github Profile</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
