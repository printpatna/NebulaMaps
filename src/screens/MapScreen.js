import React from 'react';
import { posts } from '../models';

export default class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.mapDOM = React.createRef();
  }

  componentDidMount() {
    window.initMap = this.initMap.bind(this);
  }

  initMap() {
    console.log("initMap called.")
    const google = window.google;
    const MarkerClusterer = window.MarkerClusterer;
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 3,
      center: { lat: -28.024, lng: 140.887 }
    });

    let markers = [];
    // Add a marker clusterer to manage the markers.
    const markerCluster = new MarkerClusterer(map, markers,
      { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });


    posts.getAll()
      .then(result => result.json())
      .then(result => {
        for (let [, post] of Object.entries(result)) {
          console.log(post);
          if ('location' in post && 'coords' in post['location']) {
            let contentString = '<img src="' + post.uri + '" width="200">';
            let infoWindow = new google.maps.InfoWindow({
              content: contentString
            })
            let marker = new google.maps.Marker({
              position: {
                lat: post['location']['coords']['latitude'],
                lng: post['location']['coords']['longitude'],
              },
              label: "loc",
            });
            marker.addListener('click', function () {
              infoWindow.open(map, marker);
            });
            markerCluster.addMarker(marker);
            markerCluster.fitMapToMarkers();
          }
        }
      })
  }

  render() {
    return (
      // <div>
      //   <p>Map Screen</p>
        <div
          ref={this.mapDOM}
          id="map"
          style={{
            height: "100%",
          }}
        ></div>
      // </div>
    )
  }
}
