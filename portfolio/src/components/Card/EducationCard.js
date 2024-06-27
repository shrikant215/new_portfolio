import React from 'react'
import styles from './EXCard.module.css';

function EducationCard({experience}) {
  return (
    <div className={styles.card}>
    <div className={styles.top}>
        <img src={experience.img} className={styles.logo} />
        <body className={styles.body}>
            <div className={styles.role}>{experience.role}</div>
            <div className={styles.company}>{experience.company}</div>
            <div className={styles.date}>{experience.date}</div>
        </body>
    </div>
    <div className={styles.discription}>{experience.desc}
    {
        experience?.skills &&
        <>
        <br/>
        <div className={styles.skills}>
            <b>Skills:</b>
            <div className={styles.itemWrapper}>
              {
                experience.skills.map((skill)=>(
                    <div className={styles.skill}>{skill}</div>
                ))
              }
            </div>
        </div>
     </>

    }

    </div>
    
</div>
  )
}

export default EducationCard
