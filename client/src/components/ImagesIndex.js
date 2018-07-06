import React from 'react';
import { Link } from 'react-router-dom';

const ImagesIndex = props => {
  return (
    <div>
      <h1>Images:</h1>
      {this.state}
      <ul>
        {props.images.sort((a , b) => a.name.toLowerCase() > b.name.toLowerCase()).map(image =>
          <li key={image.id}><Link to={`/images/${image.id}`}>{image.name}</Link></li>
        )}
      </ul>
    </div>
  );
};

export default ImagesIndex;
