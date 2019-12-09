import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';


class App extends Component {
  state = {
    gallery: []
  }

  // Begin GET
  getGallery = () => {
    axios.get('/gallery').then(response => {
      this.setState({
        gallery: response.data
      });
    }).catch(error =>{
      console.log(error);
      alert('error getting gallery')
    });
  }

  // on load
  componentDidMount() {
    this.getGallery();
  }

  // likes - one way to handle
  // handleLike = ( id ) => {
  //   axios({
  //     method: 'PUT',
  //     url: `/gallery/like/${id}`
  //   }).then((response) => {
  //     console.log('put with:', response, id);
  //     this.getGallery();
  //   }).catch(( error ) => {
  //     console.log( error );
  //     alert('error with like');
  //   })
  // }

  // below is quicker way to handle likes
  handleLike = (id) => {
    axios.put(`/gallery/like/${id}`).then(response =>{
      this.getGallery();
    }).catch(error =>{
      console.log(error);
      alert('error putting likes')
    });
  }

  // Begin Render
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Image Gallery</h1>
        </header>
        <br/>
        <p className="header-p">Courtney Olesee's images from trips, hikes, hobbies, and more.</p>
          {/* { JSON.stringify(this.state.gallery) } */}
        <GalleryList list={this.state.gallery} like={this.handleLike} />
      </div>
    );
  }
}

export default App;
