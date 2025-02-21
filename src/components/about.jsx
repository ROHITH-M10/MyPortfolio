import React from 'react'
import Skills from "../assets/data/skillData.json"
import '../styles/about.css';

function About() {
    return (
        <div id ="about" className="about-container">
            <div className="about-title">
                About Me
            </div>

            <div className="my-skills">
                {
                    Skills.map((skill,index)=>{
                        return(
                            <div className="skill" key={index}>
                                <div className="skill-image">
                                    <img src={skill.image} alt={skill.name}/>
                                </div>
                                <div className="skill-name">
                                    {skill.name}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default About
