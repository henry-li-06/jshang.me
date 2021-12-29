import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ name, imageUrl, description, path }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div
      key={name}
      className='work-card'
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
      style={{
        height: '320px',
        width: '420px',
        borderRadius: '25px',
        textAlign: 'center',
        marginLeft: '5%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: imageUrl,
        padding: 0,
      }}
    >
      <Link to={path} style={{ textDecoration: 'none' }}>
        {' '}
        <div
          style={{
            display: showDescription ? 'flex' : 'none',
            verticalAlign: 'center',
            color: 'white',
            height: '100%',
            width: '100%',
            backgroundColor: showDescription ? 'rgba(0,0,0,0.7)' : 'none',
            borderRadius: '25px',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div style={{ display: showDescription ? 'block' : 'none' }}>
            <h3 style={{ marginTop: 0 }}>{name}</h3>
            <h4>{description}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
