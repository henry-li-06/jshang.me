import React from 'react';
import ProjectCard from './ProjectCard';

const Work = () => {
  const cards = [
    {
      name: 'Instagram',
      description: 'Explore Page Case Study',
      path: '/instagram-case-study',
      imageUrl:
        'url(https://static.wixstatic.com/media/e87752_a6b59cc9deaf4872bff890900094f342~mv2.png/v1/fill/w_380,h_300,al_c,q_85,usm_0.66_1.00_0.01/Frame%2023.webp)',
    },
    {
      name: 'Children and Screens',
      description: 'Logo Redesign',
      path: '/children-and-screens-logo-design',
      imageUrl:
        'url(https://static.wixstatic.com/media/e87752_a9bfee9f072a4858be3226900fce2af1~mv2.png/v1/fill/w_380,h_300,al_c,q_85,usm_0.66_1.00_0.01/Frame%2024.webp)',
    },
  ];
  return (
    <div
      id='work'
      style={{
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      {cards.map((card) => (
        <ProjectCard
          name={card.name}
          description={card.description}
          imageUrl={card.imageUrl}
          path={card.path}
        />
      ))}
    </div>
  );
};

export default Work;
