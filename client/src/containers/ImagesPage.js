import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import ImagesIndex from '../components/ImagesIndex';
import {getImages} from '../actions/images';
import ImagesNew from './ImagesNew';
import ImagesShow from './ImagesShow'



class ImagesPage extends Component {
  componentDidMount() {
    this.props.getImages()
  }


  render () {
    return (
      <div>
        <Route exact path={this.props.match.url} render={() => <h4>Select an Image from the list to learn more.</h4>} />
        <ImagesIndex images={this.props.images} />
        <Switch>
          <Route path={`${this.props.match.url}/new`} component={BreedsNew} />
          <Route path={`${this.props.match.url}/:breedId`} component={BreedsShow} />
        </Switch>
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
