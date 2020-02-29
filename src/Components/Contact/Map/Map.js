import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

let API_key = process.env.REACT_APP_GOOGLE_API_KEY;

function AdressOnMap() {
  return (
    <div className="adressOnMap">
      <Map
        className="map"
        google={window.google}
        zoom={13}
        initialCenter={{ lat: 51.9228, lng: 4.47604 }}
      />
      <Marker id="marker" position={{ lat: 51.9228, lng: 4.47604 }} />
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: API_key
})(AdressOnMap);
