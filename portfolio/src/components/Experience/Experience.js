import React from "react";
import styles from "./Experience.module.css";
import { experience } from "../../Data/Skillsjson";
import ExperienceCard from "../Card/ExperienceCard";

// import TimeLine from "styled-components";
// import TimeLineItem from '@mui/lab/TimelineItem';
// import TimeLineSparator from '@mui/lab/TimelineSeparator';
// import TimeLineConnector from '@mui/lab/TimelineConnector';
// import TimeLineContent from '@mui/lab/TimelineContent';
// import TimeLinedot from '@mui/lab/TimelineDot';


function Experience() {
  return (
    <div className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.skillContainer}>
        <div className={styles.skills}>
         <div className={styles.timeLineSection}>
          {/* <TimeLine className={styles.timeLine}> */}
          {
              experience.map((experience,id)=> (
              //   <TimeLineItem key={id} className={styles.timeLineitem}>
              //     <TimeLineSparator>
              //       <TimeLinedot/>
              //       <TimeLineConnector />
              //     </TimeLineSparator>
              //   </TimeLineItem>

              <div>
                <ExperienceCard experience={experience}/>
              </div>
              ))
          }
          {/* </TimeLine> */}
         </div>
           
        </div>
       
      </div>
    </div>
  );
}

export default Experience;
