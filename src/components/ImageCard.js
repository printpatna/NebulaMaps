import React from 'react';
import { posts } from '../models';

function CallToAction(props) {
  if ("location" in props) {
    const { latitude, longitude } = props.location.coords;
    const MapsURL = "https://www.google.com/maps/search/?api=1&query=" + latitude + "," + longitude;
    const DirectionURL = "https://www.google.com/maps/dir/?api=1&dir_action=navigate&destination=" + latitude + "," + longitude;
    return (
      <div
        style={styles.imagecardCTAGallary}
      >
        <a
          style={styles.imagecardCTA}
          href={MapsURL}
        >
          <button
            type="button"
          >Show in Maps</button>
        </a>
        <a
          style={styles.imagecardCTA}
          href={DirectionURL}
        >
          <button
            type="button"
          >Show Directions</button>
        </a>
      </div>
    )
  } else {
    return <p style={styles.textBlack}>Location Not Found!</p>
  }
}

export default class extends React.Component {
  async componentDidMount() {
    posts.get(this.props.postId)
      .then(result => result.json())
      .then(result => {
        console.log(result);
        this.setState({ ...result });
      });
  }

  state = {};

  render() {
    return (
      <div
        style={styles.imageCard}
      >
        <img
          src={this.state.uri}
          // style={{ width: 400, height: 400, margin: 10 }}
          style={styles.image}
          alt=""
        />
        <CallToAction {...this.state} />
      </div>
    );
  }
}

const styles = {
  imageCard: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 2,
    margin: 10,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  image: {
    width: 400,
    margin: 20,
  },
  imagecardCTAGallary: {
    // margin: 10,
    flexDirection: 'row',
    // justifyContent: 'space-around', 
  },
  imagecardCTA: {
    margin: 10,
  },
};