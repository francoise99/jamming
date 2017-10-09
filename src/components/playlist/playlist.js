import React from 'react';
import TrackList from './../tracklist/tracklist.js';
import App from './../app/App.js'

class Playlist extends React.Component{
  render(){
    return(
  <div className="Playlist">
    <input defaultValue={'new Playlist'}/>
    <TrackList tracks=this.props.playlistTracks/>
    <a className="Playlist-save">SAVE TO SPOTIFY</a>
  </div>
);
}
}
export default Playlist;
