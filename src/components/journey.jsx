import '../styles/journey.css';
import React from 'react';
import EducationCard from './educationCard';
import EducationData from '../assets/data/educationData.json';
import ExperienceCard from './experienceCard';
import ExperienceData from '../assets/data/experienceData.json';


function Journey() {
  return (
    <div className="education-experience" id="journey" >
        <div className="education">
            <div className="heading">
                Education
            </div>

            <div className="content" data-aos="fade-down">
                {EducationData.map((education) => {
                    return <EducationCard institute={education.institute} degree={education.degree} grade={education.grade} year={education.year}/>
                })}


            </div>
        </div>

        <div className="experience">
            <div className="heading">
                Experience
            </div>

            <div className="content" data-aos="fade-down">
                {ExperienceData.map((experience) => {
                    return <ExperienceCard company={experience.company} role={experience.role} description={experience.description} date={experience.date}/>
                })}


            </div>
        </div>

    </div>
  );
}

export default Journey;
