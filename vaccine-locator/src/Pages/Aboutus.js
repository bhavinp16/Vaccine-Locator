import React from 'react'
import Navbar from '../Components/Navbar'

function Aboutus() {
    return (
        <div>
            <Navbar />
            <div className="jumbotron flex align-items-center justify-content-center p-lg-5 m-lg-5">
                <header className="flex align-content-center justify-content-center bold display-4">Vaccine Locator</header>
                <br />
                We are a free and online service provider where we help people search for locations which that offer vaccinations. We also help them track the nearest location and locaions available in their proximity.
                We work with partners such as clinics, pharmacies, and health departments to provide accurate and up-to-date information about vaccination services. We also let them book an appointment for the same.


            </div>
        </div>
    )
}

export default Aboutus
