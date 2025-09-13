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
                <div style={{ fontFamily: 'monospace', fontSize: '1.5rem', fontWeight: 'bold', color: '#00FFAB' }}>
                    {'$'} rm * — but I create, not delete.
                </div>
                <br />
                I'm Rohith — a Computer Science graduate from Amrita School of Computing, Coimbatore, 
                passionate about building software, crafting intelligent AI models and creating digital designs.
                <br /><br />
                My expertise spans Web Development, AI/ML solutions and Digital Designing — 
                blending code and creativity to bring ideas to life. I'm a curious learner, always exploring new technologies and innovative ways to solve real-world problems.
                <br /><br />
                Beyond the keyboard, you'll find me capturing moments through photography, designing creative artworks, 
                adding stamps to my philately collection or enjoying a game of football.

            <br /><br />
            A snapshot of the technologies and skills I've worked with
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
