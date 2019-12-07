import React, { Component } from 'react';

class GalleryItem extends Component {
  state = {
    clickToggle: 'image'
  }

  // toggle
  toggleImageDesc = () => {
    if (this.state.clickToggle === 'image'){
      this.setState({
        clickToggle: 'description'
      })
    }
    else{
      this.setState({
        clickToggle: 'image'
      })
    }
  }

  render() {
    if( this.state.clickToggle === 'image' ){
      return (
        <div >
          <img className="imageDesc" onClick= {this.toggleImageDesc} height="300" src={this.props.image.path} alt={this.props.image.description}/>
          <br/>
          <div class="likes">
            <button className="likebtn" onClick={() => this.props.like(this.props.i)}>Like</button>
            <p>Likes: {this.props.image.likes}</p>
          </div>
        </div>
      )
    } else{
      return (
        <div >
          <div className="imageDesc" onClick= {this.toggleImageDesc} height="300" >{this.props.image.description} </div>
          <br/>
          <div class="likes">
            <button className="likebtn" onClick={() => this.props.like(this.props.i)}>Like</button>
            <p>Likes: {this.props.image.likes}</p>
          </div>
        </div>
      )}
  }
}

export default GalleryItem;