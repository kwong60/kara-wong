import React from 'react';
import '../style.css';

const Card = ({ imageUrl, title, description, link }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <a href={link} className="card-link">View Project</a>
    </div>
  );
};

export default Card;