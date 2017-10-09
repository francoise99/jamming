import React from 'react';
import Track from './../track/track.js';
import App from './../app/App.js'

//You will add a map method that renders a set of Track components  -->
class TrackList extends React.Component{
render(){
  return(
<div className="TrackList">
{this.props.tracks.map(track)}
{this.props.track.name}
{this.props.track.artist}
{this.props.track.album}

</div>
);
}
}
export default TrackList;
