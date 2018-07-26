import React from 'react';

const ImageShowDisplay = props =>
  <div>
    <img src={props.image.imageURL} alt="pup-pic" />
    <h4>{props.image.name}</h4>
    <p>Description: {props.image.description}</p>
    <button onClick={() => props.imageFavorite(props.image.id)} >Favorite</button>

  </div>


export default ImageShowDisplay;
