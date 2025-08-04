import React from 'react';
import { Carousel } from 'antd';
import ProjectsCard from './projectsCard.jsx';
import ProjectsData from '../assets/data/projectsData.json';
import '../styles/projects.css';

function Projects() {
  return (
    <div className="projects" id="projects" >
      <div className="projects-heading">Projects</div>
      <Carousel arrows infinite={false} className="projects-carousel">
        {ProjectsData.map((project) => (
          <div key={project.id} className="project-slide">
            <ProjectsCard 
              id={project.id} 
              image={project.image} 
              title={project.title} 
              description={project.description} 
              link1={project.link1} 
              link2={project.link2} 
              tech={project.tech} 
            />
          </div>
        ))}
      </Carousel>

      
      <div className="view-more-projects">
          <a href="https://github.com/ROHITH-M10" target="_blank" rel="noreferrer">
            View More Projects on GitHub <i className="fa">&#xf09b;</i>
          </a>
        </div>
    </div>
  );
};

export default Projects;
