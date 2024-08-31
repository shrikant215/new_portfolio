import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Card/ExperienceCard';
import { experiences } from '../../Data/Skillsjson';
import style from './Experience.module.css' // Import the CSS file

const Experience = () => {
    return (
        <div className={style.experienceContainer} id="experience">
            <div className={style.experienceWrapper}>
                <div className={style.experienceTitle}>Experience</div>
                <div className={style.experienceDese}>
                    My work experience as a software engineer and working on different projects.
                </div>
                <div className={style.timelineSection}>
                    <Timeline>
                        {experiences.map((experience, index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== experiences.length - 1 && (
                                        <TimelineConnector style={{ background: '#854CE6' }} />
                                    )}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard experience={experience} />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </div>
            </div>
        </div>
    );
};

export default Experience;
