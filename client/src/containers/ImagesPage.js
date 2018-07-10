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
        <Route exact path={this.props.match.url} render={() => <h4>Click on a pups name below.</h4>} />
        <ImagesIndex images={this.props.images} />
        <Switch>
          <Route path={`${this.props.match.url}/new`} component={ImagesNew} />
          <Route path={`${this.props.match.url}/:imageId`} component={ImagesShow} />
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
