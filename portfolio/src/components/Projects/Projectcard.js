import React from 'react'
import styles from './Projectcard.module.css';

function Projectcard({project: {title,description,skills,image}}) {
  return (
    // <div >
    //    <div className={styles.cotainer}>
    //         <h3 className={styles.title}>{title}</h3>
    //         <p className={styles.description}>{description}</p>
    //         <ul className={styles.skills}>
    //           {skills.map((skill, id) => (
    //             <li key={id} className={styles.skill}>{skill}</li>
    //           ))}
    //         </ul>
    //         <div className={styles.links}>
    //           <a className={styles.link}>Demo</a>
    //           <a className={styles.link}>Source</a>
    //         </div>
    //       </div>
    // </div>
    <card>
     <img src={image} />
     <tags>
      {
        skills.map((skill, id)=> (
          <tag key={id}>{skill}</tag>
        ))
      }
     </tags>
     <div className={styles.details}>
      <div className={styles.title}>{title}</div>
      <div className={styles.discrioption}>{description}</div>
     </div>
     <members></members>
    </card>
  )
}

export default Projectcard
