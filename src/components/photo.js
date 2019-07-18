import React from 'react';
import { Grid,Item,Image } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

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
      <Item>
        <Item.Image src={props.data.url} />
        <Item.Content>
          <Item.Header>{props.data.title}</Item.Header>
          <Item.Meta>
            <span className='date'>{props.data.date}</span>
          </Item.Meta>
          <Item.Description>
            {props.data.explanation}
          </Item.Description>
        </Item.Content>
      </Item>
    );
  }

};

export default Photo;