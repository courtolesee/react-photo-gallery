import React, { Component } from 'react';

class GalleryItem extends Component {

  render() {
    return (
      <div className="item">
        <img height="300" src={this.props.image.path}/>
        <br/>
        <button></button>
        <text></text>
      </div>
    )
  }
}

export default GalleryItem;