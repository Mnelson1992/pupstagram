import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addImage } from '../actions/images';

class ImagesNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: '',
      name: '',
      description: ''
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { addImage, history } = this.props;
    addImage(this.state);
    history.push('/images')
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>Add an Image</h2>
        <form onSubmit={this.handleOnSubmit} >
          <p>
            <label htmlFor="imageURL">Image: </label>
            <input id="imageURL" type="text" placeholder="Picture of a Pup" name="imageURL" onChange={this.handleOnChange} />
          </p>
          <p>
            <label htmlFor="name">Name: </label>
            <input id="name" type="text" placeholder="Pup name" name="name" onChange={this.handleOnChange} />
          </p>
          <p>
            <label htmlFor="description">Description: </label>
            <textarea id="description" type="textarea" placeholder="Tell us what your pup is up to" name="description" onChange={this.handleOnChange} />
          </p>
          <input type="submit" value="Add Image" />
        </form>
      </div>
    );
  }
};

export default connect(null, { addImage })(ImagesNew);
