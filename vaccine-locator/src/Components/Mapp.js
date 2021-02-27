import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './mapstylesheet.css'
import * as ParkData from "./skateboard-parks.json"
function Mapp() {
    const [viewport, setViewport] = useState({

        latitude: 37.7577,
        longitude: -122.4376,
        width: "100vw",
        height: "100vh",
        zoom: 8
    });

    return (
        <div>
            <ReactMapGL {...viewport}
                mapboxApiAccessToken="pk.eyJ1IjoicHJhbmF2cGF0a2kiLCJhIjoiY2tsbm54bWFiMDM0bDJ3cGg0aDdnb2I5bSJ9.Wb2YJ9VaMxy7CLM0eYv_FQ"
                mapStyle="mapbox://styles/mapbox/dark-v9"
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
            >
                {ParkData.features.map((park) => (
                    <Marker
                        key={park.properties.PARK_ID}
                        latitude={park.geometry.coordinates[1]}
                        longitude={park.geometry.coordinates[0]}>
                        <button>
                            <img className="pin" src="https://www.pngrepo.com/png/90074/512/hospital.png" alt="#" />
                        </button>
                    </Marker>
                ))}
            </ReactMapGL>
        </div>
    );
}
export default Mapp
