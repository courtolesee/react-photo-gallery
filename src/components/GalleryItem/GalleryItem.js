import React, { Component } from 'react';

class GalleryItem extends Component {

  render() {
    return (
      <div className="item">
        <img height="300" src={this.props.image.path} alt={this.props.image.descritption}/>
        <br/>
        <button></button>
      </div>
    )
  }
}

export default GalleryItem;