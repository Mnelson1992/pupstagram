import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageShowDisplay from '../components/ImageShowDisplay';
import { imageFavorite } from '../actions/images';


class ImagesShow extends Component {
  render () {
    return (
      <ImageShowDisplay image={this.props.image} imageFavorite={this.props.imageFavorite} />
    )
  }
}

const mapStateToProps =(state, ownProps) => {
  const image = state.images.find(image => image.id === parseInt(ownProps.match.params.imageId, 10))
  if (image) {
    return {image: image}
  } else {
    return {image: "Sorry an error occured please try again"}
  }
}

export default connect(mapStateToProps, {imageFavorite})(ImagesShow);
