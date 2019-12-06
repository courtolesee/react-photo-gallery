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

  componentDidMount() {
    this.getGallery();
  }

  // Begin Render
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Courtney Olesee's Image Gallery</h1>
        </header>
        <br/>
        <p>Gallery</p>
        <GalleryList list={this.state.gallery} />
      </div>
    );
  }
}

export default App;
