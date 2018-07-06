import React, { Component } from 'react';
import { connect } from 'react-redux';



class ImagesPage extends Component {


  render () {
    return (
      <div>
        <Route exact path={this.props.match.url} render={() => <h4>Select an Image from the list to learn more.</h4>} />
        <ImagesIndex images={this.props.images} />
        <Switch>
          <Route path={`${this.props.match.url}/new`} component={ImagesNew} />
          <Route path={`${this.props.match.url}/:imageId`} component={ImagesShow}/>
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



export default connect(mapStateToProps)(ImagesPage);
