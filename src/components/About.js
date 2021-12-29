import React from 'react';

const About = () => {
  return (
    <div
      id='about'
      style={{
        marginTop: '10%',
        display: 'flex',
        justifyContent: 'centter',
      }}
    >
      <div
        id='about-image'
        style={{
          height: '350px',
          width: '350px',
          borderStyle: 'solid',
          borderColor: 'black',
          margin: '10%',
        }}
      ></div>
      <div id='about-text' style={{ width: '50%' }}>
        <h1>
          <span style={{ color: 'grey' }}>Meet </span>
          <span>Jin</span>
        </h1>
        <div id='about-jin' style={{ fontSize: '18px' }}>
          <p>
            Hi there! I'm a junior at Cornell University studying Human
            Development and Minoring in Information Science with a concentration
            in User Experience. Coming from a psychology background, I was
            immediately drawn to the applied psychology that goes into UX
            research and design, and I am excited to continue exploring the
            intersection between psychology, technology, and creativity.
          </p>
          <p>
            When I'm drawing rectangles in Figma or reading Medium articles, you
            can find me playing guitar, rock climbing, or playing tennis.
          </p>
          <h3>Contact me about anything!</h3>
          <div id='links' style={{ display: 'flex' }}>
            <div
              style={{
                borderStyle: 'solid',
                borderColor: 'black',
                height: '50px',
                width: '50px',
                margin: '0, 3%',
              }}
            ></div>
            <div
              style={{
                borderStyle: 'solid',
                borderColor: 'black',
                height: '50px',
                width: '50px',
                marginLeft: '3%',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
