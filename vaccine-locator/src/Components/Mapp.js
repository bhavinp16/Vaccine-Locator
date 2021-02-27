import React, { useState } from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './mapstylesheet.css'
import * as HospData from "./skateboard-parks.json"
function Mapp() {
    const [viewport, setViewport] = useState({
        
        latitude: 37.7577,
        longitude: -122.4376,
        width: "100vw",
        height: "100vh",
        zoom: 8
    });

    const [selectedHospital, setSelectedHospital] = useState(null);

    return (
        <div>
            <ReactMapGL {...viewport}
            mapboxApiAccessToken="pk.eyJ1IjoicHJhbmF2cGF0a2kiLCJhIjoiY2tsbm54bWFiMDM0bDJ3cGg0aDdnb2I5bSJ9.Wb2YJ9VaMxy7CLM0eYv_FQ"
            mapStyle="mapbox://styles/pranavpatki/cklnskzam0fra17tm7n4q8d7f"
            onViewportChange={viewport => {
                setViewport(viewport);
            }}
            >
                {HospData.features.map((hospital)=> (
                    <Marker
                    key={hospital.properties.PARK_ID}
                    latitude={hospital.geometry.coordinates[1]}
                    longitude={hospital.geometry.coordinates[0]}>
                        <button
                        onClick={e => {
                            e.preventDefault();
                            setSelectedHospital(hospital);
                          }}
                        >
                            <img className="pin" src="https://www.pngrepo.com/png/90074/512/hospital.png" alt="#" />
                        </button>
                    </Marker>
                ))}
                {selectedHospital ? (
          <Popup
            latitude={selectedHospital.geometry.coordinates[1]}
            longitude={selectedHospital.geometry.coordinates[0]}
            onClose={() => {
              setSelectedHospital(null);
            }}
          >
            <div>
              <h2>{selectedHospital.properties.NAME}</h2>
              <p>{selectedHospital.properties.DESCRIPTIO}</p>
            </div>
          </Popup>
        ) : null}
            </ReactMapGL>
        </div>
    );
}
export default Mapp
