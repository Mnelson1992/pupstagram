import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import ImagesIndex from '../components/ImagesIndex';
import {getImages} from '../actions/images';



class ImagesPage extends Component {
  componentDidMount() {
    this.props.getImages()
  }


  render () {
    return (
      <div>
        <Route exact path={this.props.match.url} render={() => <h4>Select an Image from the list to learn more.</h4>} />
        <ImagesIndex images={this.props.images} />
        
      </div>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      images: state.images
  };

}



export default connect(mapStateToProps, {getImages})(ImagesPage);
