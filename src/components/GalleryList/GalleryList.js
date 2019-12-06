import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';


class GalleryList extends Component {

  render() {
    return (
      <div className="list">
        {this.props.list.map((image, i) => {
          // console.log('image is', image);
          return <GalleryItem image={image} key={i} />
        })}
      </div>
    )
  }
}

export default GalleryList;

