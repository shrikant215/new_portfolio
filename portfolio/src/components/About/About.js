import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import styles from './About.module.css'

function About() {
  return (
   <section className={styles.container} id='education'>
    <h2 className={styles.title}>Education</h2>
    <div className={styles.sss}>
    <img src='https://img.freepik.com/premium-vector/software-development-web-coding-laptop-programming-concept-website-design-coding-remote-work-home_3482-5615.jpg'style={{height:'50vh' , width:'50%', borderRadius:'20px'}} />
   
   <div>
    <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
                {/* <MenuIcon/> */}
                <h3>Diploma in Electronics & Communication</h3>
                <p>
                Government Polytechnic college Rabakavi Banahatti, Karnataka
                <br/>
               <span>Completed 2023</span> 
                </p>
            </div>
        </li>
        <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
            {/* <MenuIcon/> */}
                <h3>PUC - 12th</h3>
                <p>
                Science in BLDE college Jamkhandi, Karnataka
                <br/>
               <span>Completed 2019</span> 
                </p>
            </div>
        </li>
        <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
            {/* <MenuIcon/> */}
                <h3>SSLC - 10th</h3>
                <p>
                Gnyan Gangotri High School jamkhandi, Karnataka
                <br/>
               <span>Completed 2017</span> 
                </p>
            </div>
        </li>
    </ul>
    </div>
    </div>
   </section>
  )
}

export default About
