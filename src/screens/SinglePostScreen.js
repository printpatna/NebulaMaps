import React from 'react';
import { ImageCard } from '../components';

export default class extends React.Component {
  render() {
    return (
      <div
        style={{
          height: '100%',
        }}
      >
        {/* <p>Single Post Screen post id {this.props.match.params.id}</p> */}
        <ImageCard
          postId={this.props.match.params.id}
        />
      </div>
    )
  }
}
