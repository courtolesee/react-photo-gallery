import React, { Component } from 'react';

class GalleryList extends Component {

  render() {
    return (
      <div className="pic">
        {this.props.list.map((image, i) => {
          console.log('image is', image);
          return (<div key={i}>
            <img height="300" src={image.path}/>
            <br/>
            <button></button>
            <text></text>
            </div>)
        })}
      </div>
    )
  }
}

export default GalleryList;

