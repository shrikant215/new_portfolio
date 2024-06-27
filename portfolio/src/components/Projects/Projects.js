import React from "react";
import projectData from "../../Data/Projects.json";
import styles from './Projects.module.css';
import Projectcard from "./Projectcard";

function Projects() {
  return (
    <section className={styles.container} id='projects'>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projectData.map((project, id) => (
         <Projectcard key={id} project={project}/>
        ))}
      </div>
    </section>
  );
}

export default Projects;
