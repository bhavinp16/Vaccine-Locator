import React from 'react'
import { Fragment, useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import usercontext from '../Context/user/usercontext';
import { auth } from '../firebase';

function Login() {
    const context = useContext(usercontext)
    const { user, setuser } = context

    const initialState = {
        email: "",
        password: ""
    }
    const [formdata, setformdata] = useState(initialState)

    const handlechange = (e) => {
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value.trim(),  //to clear any whitespaces before or after 
        })
    }

    const logind = (e) => {
        e.preventDefault();
        //firebase auth 
        auth.signInWithEmailAndPassword(formdata.email, formdata.password)
            .then((userCredential) => {
                // Signed in
                const userr = userCredential.user;
                setuser(userr); // updating the state to the authenticated user
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                error.log(errorCode, errorMessage);
            });
    }

    return (
        <Fragment className="outer">
            <form className="inner container mt-5 ">

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={handlechange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Enter password" onChange={handlechange} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={logind}>Sign in</button>
                <Link to="/signup" className="btn btn-light btn-md btn-block">Create an account
                </Link>
            </form>

        </Fragment>
    )
}

export default Login
