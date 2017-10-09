import React, { Component } from 'react';

import './App.css';
import SearchBar from './../searchbar/searchbar.js';
import Playlist from './../playlist/playlist.js';
import SearchResults from './../searchresults/searchresults.js'

class App extends React.Component {
  constructor(props){
    super(props);

    //let SearchResults = this.state.SearchResults;
  //this.setState={SearchResults : {[name, artist, album]}};
  //this.setState.SearchResults={[name, artist, album]};
 this.state = {
          SearchResults: {
            name: ['naam1','naam2'],
            artist: ['artiest1','artiest2'],
            album: ['album1','album2']
            }
       }
       this.state ={
         playlistName= ''; 
       }
      this.state = {
        PlaylistTrack : {
          name: ['naam'],
          artiest: ['artiest'],
          album: ['album']
        }
      }
  }
  addTrack(track){
      if(playlistTracks = )

  }
  render() {
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar/>
    <div className="App-playlist">
      <SearchResults/>
      <Playlist playlistName={this.state.playlistName} PlaylistTrack={this.state.PlaylistTrack}/>
    </div>
  </div>
</div>

    );
  }
}

export default App;
