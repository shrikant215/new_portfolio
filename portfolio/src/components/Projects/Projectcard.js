import React from 'react'
import styles from './Projectcard.module.css';

function Projectcard({project, setOpenModal}) {
  return (

    <card onClick={() => setOpenModal({state: true, project:project })}>
     <img src={project.image} />
     <tags>
      {
        project.skills.map((skill, id)=> (
          <tag key={id}>{skill}</tag>
        ))
      }
     </tags>
     <div className={styles.details}>
      <div className={styles.title}>{project.title}</div>
      <div className={styles.discrioption}>{project.description}</div>
     </div>
     <members></members>
    </card>
  )
}

export default Projectcard
