import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import usercontext from '../Context/user/usercontext'
import { auth } from '../firebase';

function Navbar() {
    const context = useContext(usercontext);
    const { user, setuser } = context;

    const signout = () => {
        auth.signOut()
            .then(
                function () { console.log("User signed out") }
            )
        // change user context 
        setuser(null)
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/home" className="navbar-brand">Vaccine Locator </Link>

                <ul class="navbar-nav mr-auto ml-5">
                    <li class="nav-item active px-3">
                        <Link to="/home" className="nav-link"> Home </Link>
                    </li>
                    {/* will scroll to that part downside */}
                    <li class="nav-item px-3">
                        <Link to="/aboutus" className="nav-link" >About us</Link>
                    </li>
                </ul>
                <div class="my-2 my-lg-0 px-3">
                    <li class="nav-item">
                        <Link className="text-white" onClick={signout}>Sign out</Link>
                    </li>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
