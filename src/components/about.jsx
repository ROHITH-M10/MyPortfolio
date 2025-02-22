import React from 'react'
import Skills from "../assets/data/skillData.json"
import '../styles/about.css';

function About() {
    return (
        <div id ="about"  className="about-container">
            <div className="about-title">
                About Me
            </div>
            <div className="about-info" data-aos="fade-right">
            Welcome to my digital space!
            <br />
            I'm Rohith, a passionate 4th-year Computer Science Engineering student at Amrita School of Computing, Coimbatore. 
            I love working with technology and have a keen interest in Web Development,AI, Machine Learning, and Designing. 
            I am always eager to learn new things and solve problems.
            <br />
            In my free time, I enjoy photography, designing, philately, and playing football.

            <br /><br />
            A snapshot of the technologies and skills I’ve worked with
            </div>

            <div className="my-skills" >
                {
                    Skills.map((skill,index)=>{
                        return(
                            <div className="skill" key={index} data-aos={index%2===0?"fade-top":"fade-bottom"}>
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
