import React from 'react';
import './TrackList.css';
import {Track} from '../Track/Track';

export class TrackList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tracks = this.props.tracks;
    const tracksItems = tracks.map(track =>
        <Track key={track.id} track={track} onAdd={this.props.onAdd}/>
      )

  return (
    <div className="TrackList">
      {tracksItems}
    </div>
    );
  }
}
