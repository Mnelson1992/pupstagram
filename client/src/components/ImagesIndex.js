import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../containers/Button.js';

const ImagesIndex = props => {
  return (
    <div>
      <h1>Pooches:</h1>
      <ul>
        {props.images.map((image) =>
          <li key={image.id}><Link to={`/images/${image.id}`}>{image.name}</Link><Button image={image}/></li>
        )}
      </ul>
    </div>
  );
};

export default ImagesIndex;
