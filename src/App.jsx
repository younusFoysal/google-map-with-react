import GoogleMapReact from 'google-map-react';

import './App.css'
import {googleAPIKey} from "./assets/googleAPIKey.js";
import React from "react";
import {FaMapMarkedAlt} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";


const AnyReactComponent = ({ text }) => <div style={{color: "red"}}><FaLocationDot></FaLocationDot></div>;

function App() {

    const defaultProps = {
        center: {
            lat: 22.3245,
            lng: 91.8117
        },
        zoom: 14
    };


  return (
      <>

          <div style={{height: '500px', width: '500px'}}>
              <GoogleMapReact
                  bootstrapURLKeys={{key: googleAPIKey}}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
              >
                  <AnyReactComponent
                      lat={defaultProps.center.lat}
                      lng={defaultProps.center.lng}
                      text="My Marker"
                  />
              </GoogleMapReact>
          </div>

      </>
  )
}

export default App
