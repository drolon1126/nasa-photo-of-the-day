import React from 'react';

const Photo = (props) => {

  return (
    <div>
      <div>
        <h1>{props.data.title}</h1>
      </div>

      <div>
        <iframe 
          src={props.data.url}
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
        />
      </div>

      <div>
        <p>{props.data.explanation}</p>
      </div>
    </div>
  );

};

export default Photo;