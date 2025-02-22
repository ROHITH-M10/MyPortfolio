import '../styles/projectsCard.css';
import React from 'react';

function ProjectsCard(props) {
  return (
    <div className="projects-card" data-aos="fade-down">
        <div className="projects-card-image">
        <img src={props.image} alt="project" />
        </div>
        <div className="projects-card-info">
            <div className="title">{props.title}</div>
            <div className="projects-description">{props.description}</div>
            <div className="projects-links">

               {
               (props.link1.link) &&(
            <a href={props.link1.link}>{props.link1.linkName} <i class="fa">&#xf09b;</i></a>
            )}
            
            {
                (props.link2.link) &&(
                <a href={props.link2.link}>{props.link2.linkName} <i class="fa">&#xf08e;</i></a>
            )}
            </div>
            <div className="tech-used">
                {
                    props.tech.map((tech) => {
                        return <div className="tech">{tech}</div>
                    })
                }
            </div>
        </div>
    </div>
  );
}

export default ProjectsCard;
