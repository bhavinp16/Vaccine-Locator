import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function Mapp() {
    const [viewport, setViewport] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
    });

    return (
        <ReactMapGL
            mapboxApiAccessToken={"pk.eyJ1IjoiYmhhdmlucDE2IiwiYSI6ImNrbG5vcWswdDBsNGwydW4zcHd2cjl2aWsifQ.RcqH82Tfx9LNpsLyaPP68g"}
            {...viewport}
            onViewportChange={(newView) => setViewport(newView)}
        />
    );
}
export default Mapp
