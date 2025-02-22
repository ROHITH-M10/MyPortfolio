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
    </div>
  );
};

export default Projects;
