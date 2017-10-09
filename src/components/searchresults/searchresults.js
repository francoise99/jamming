import React from 'react';
import TrackList from './../tracklist/tracklist.js'
import App  from './../app/App.js'

class SearchResults extends React.Component{
    render(){
      return(
  <div className="SearchResults">
    <h2>Results</h2>
    <TrackList/>
  </div>
);
}
}
export default SearchResults;
