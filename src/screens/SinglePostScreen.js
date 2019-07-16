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
        <ImageCard
          postId={this.props.match.params.id ? this.props.match.params.id : this.props.match.params.post_id}
          channelId={this.props.match.params.id ? undefined : this.props.match.params.channel_id}
        />
      </div>
    )
  }
}
