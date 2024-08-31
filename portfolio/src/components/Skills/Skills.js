import React from 'react';
import styles from './Skills.module.css';
import { skills } from '../../Data/Skillsjson';
function Skills() {
  return (
    <section id='skills' className={styles.container}>
      <h2 className={styles.title}>Skills</h2>
      <div style={{justifyContent:'center', fontWeight:'700',letterSpacing:'1px',color:"#C8CFD8"}}>Here are some of my skills on which I have been working on for the past 1 years.</div>
      <div className={styles.wrapper}>
        <div className={styles.skillContainer}>
          {
            skills.map((items)=>(
                <div className={styles.skills}>
                    <div className={styles.skillsTitle}>{items.title}</div>
                    <div className={styles.skillsList}>
                        {
                            items.skills.map((ele)=>(                    
                                <div className={styles.skillsItems}>
                                  <img className={styles.skillsImage} src={ele.image}/>
                                 {ele.name}
                                </div>
                            ))
                        }
                    </div>

                </div>
            ))

          }
        </div>
      </div>
    </section>
  )
}

export default Skills
