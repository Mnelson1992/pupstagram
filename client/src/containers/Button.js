import React from 'react'

class Button extends React.Component {
  state = {
    favorites: this.props.image.favorites
  }


  handleClick = event => {
    const updatedImage = Object.assign(...this.props.image, { favorites: this.props.image.favorites + 1 })
    let favoriteFetch = fetch(`/api/images/${this.props.image.id}`, {method: 'put', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({image: updatedImage})})
      .then(response => response.json())
      .then(data =>  this.setState({ favorites: data.favorites }))
      }
    //this.setState({
    //  favorites: event.favorites + 1
    //});


  render() {
    return (
      <div>
        <button onClick={this.handleClick}> Favorite </button><p>favorites: {this.state.favorites}</p>

      </div>
    )
  }


}
export default Button;
