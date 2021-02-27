import React from 'react'
import { Link } from 'react-router-dom'

function Bodyhomepage() {

    return (
        <div>
            This is body component
            <Link to="/map" className="button-big">Book a vaccine!!</Link>
        </div>
    )
}

export default Bodyhomepage
