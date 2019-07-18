import React from 'react';

const Photo = (props) => {

  if(props.data.media_type==='video'){
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
  } else {
    return (
      <div>
        <div>
          <h1>{props.data.title}</h1>
        </div>

        <div>
          <img
            src={props.data.url}
          />
        </div>

        <div>
          <p>{props.data.explanation}</p>
        </div>
      </div>
    );
  }

};

export default Photo;