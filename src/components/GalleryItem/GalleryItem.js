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
        <section className="imCards">
          <img className="imagePhoto" onClick= {this.toggleImageDesc} src={this.props.image.path} alt={this.props.image.description}/>
          <br/>
          <div className="likes">
            <button className="likebtn" onClick={() => this.props.like(this.props.i)}>Like</button>
            <p>Likes: {this.props.image.likes}</p>
          </div>
        </section>
      )
    } else{
      return (
        <section className="imCards">
          <div className="imageDesc" onClick= {this.toggleImageDesc} >{this.props.image.description} </div>
          <br/>
          <div className="likes">
            <button className="likebtn" onClick={() => this.props.like(this.props.i)}>Like</button>
            <p>Likes: {this.props.image.likes}</p>
          </div>
        </section>
      )}
  }
}

export default GalleryItem;