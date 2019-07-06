import React from 'react';
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {Playlist} from '../Playlist/Playlist';
import {SearchResults} from '../SearchResults/SearchResults';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{
      name: "She's out of my life",
      artist: 'Michael Jackson',
      album: 'Off the Wall',
      id: 1
    }],
    playlistName: '',
    playlistTracks: [{name: "She's out of my life",
    artist: 'Michael Jackson',
    album: 'Off the Wall',
    id: 1}]
  };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
  return;
  }
    this.setState({playlistTracks: track})
  }

  removeTrack(track) {
    let currentPlaylist = this.state.playlistTracks;
    const trackToRemoveIndex = this.state.playlistTracks.findIndex(savedTrack => savedTrack.id === track.id)
    if (trackToRemoveIndex === -1) {
      return;
  }
    const updatedPlaylist = currentPlaylist.slice(trackToRemoveIndex)
    this.setState({playlistTracks: updatedPlaylist})
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrack}/>
          </div>
        </div>
      </div>
    );
}}

export default App;
