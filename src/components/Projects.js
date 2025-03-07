import React from 'react';
import Card from './PortfolioCard'; 
import Navbar from '../navbar.js'

const projects = [
  {
    title: 'Case Study: Search Bar',
    description: 'Join me as we "search" for the perfect mechanism to deliver speedy, intuitive results with just one click!',
    imageUrl: 'public/googleredesign.png',
    link: 'projects/search-bar'
  },
  {
    title: 'Case Study: CIT Elevator',
    description: 'Join me as we "search" for the perfect mechanism to deliver speedy, intuitive results with just one click!',
    imageUrl: 'public/googleredesign.png',
    link: 'projects/cit-elevator'
  }
]

const Projects = () => {
  return (
    <div>
    <Navbar />
    <div className="projects-section">
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <Card
            key={index}
            imageUrl={project.imageUrl}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Projects;