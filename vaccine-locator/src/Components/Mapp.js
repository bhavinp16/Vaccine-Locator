import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup, GeolocateControl, NavigationControl, FullscreenControl } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import './mapstylesheet.css'
import * as HospData from "./skateboard-parks.json"


function Mapp() {
    const [viewport, setViewport] = useState({

        latitude: 45.3555222,
        longitude: -75.7238167,
        width: "100vw",
        height: "100vh",
        zoom: 10
    });

    HospData.features.forEach(function (store, i) {
        store.properties.id = i;
    });

    const navControlStyle = {
        right: 10,
        top: 10
    };

    const geolocateControlStyle = {
        right: 10,
        top: 10
    };

    const fullscreenControlStyle = {
        right: 10,
        top: 10
    };

    const [selectedHospital, setSelectedHospital] = useState(null);

    return (
        <>
            <ReactMapGL {...viewport}
                mapboxApiAccessToken="pk.eyJ1IjoicHJhbmF2cGF0a2kiLCJhIjoiY2tsbm54bWFiMDM0bDJ3cGg0aDdnb2I5bSJ9.Wb2YJ9VaMxy7CLM0eYv_FQ"
                mapStyle="mapbox://styles/mapbox/dark-v9"
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
            >
                <FullscreenControl style={fullscreenControlStyle} />

                <NavigationControl style={navControlStyle} />

                <GeolocateControl
                    style={geolocateControlStyle}
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                    auto
                />

                {HospData.features.map((hospital) => (
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
        </>
    );
}
export default Mapp