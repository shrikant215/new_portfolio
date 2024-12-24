import React from "react";
import projectData from "../../Data/Projects.json";
import styles from './Projects.module.css';
import Projectcard from "./Projectcard";

function Projects({setOpenModal}) {
  return (
    <section className={styles.container} id='projects'>
      <h2 className={styles.title}>Projects</h2>
      <div style={{fontWeight:'700',justifyContent:'center', display:'flex',letterSpacing:'1px', color: "#C8CFD8"}}>I have worked on web app's. Here are some of my projects.</div>
      <div className={styles.projects}>
        {projectData.map((project, id) => (
         <Projectcard setOpenModal={setOpenModal} key={id} project={project}/>
        ))}
      </div>
    </section>
  );
}

export default Projects;
