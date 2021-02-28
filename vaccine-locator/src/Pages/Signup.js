import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import usercontext from '../Context/user/usercontext';
import { auth } from '../firebase';

function Signup() {
    const context = useContext(usercontext)
    const { user, setuser } = context;

    const initialState = {
        firstname: "",
        lastname: "",
        phoneno: "",
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

    const signupsubmit = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(formdata.email, formdata.password)
            .then((userCredential) => {
                // Signed in 
                const userr = userCredential.user;
                setuser(userr);
                var userrs = auth.currentUser;
                userrs.updateProfile({
                    displayName: formdata.firstname + " " + formdata.lastname,
                    phoneNumber: formdata.phoneno
                    // photoURL: "https://profile.jpg"

                }).then(function () {
                    console.log(formdata.firstname + " " + formdata.lastname);
                }).catch(function (error) {
                    const errorMessage = error.message;
                    console.log(errorMessage);
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
               console.log(errorCode, errorMessage);
            });
    }

    return (
        <>
            <form className="container mt-5">
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" name="firstname" placeholder="First name" onChange={handlechange} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" name="lastname" placeholder="Last name" onChange={handlechange} />
                </div>

                <div className="form-group">
                    <label>Phone no</label>
                    <input type="text" className="form-control" name="phoneno" placeholder="Phone no" onChange={handlechange} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={handlechange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Enter password" onChange={handlechange} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={signupsubmit}>Register</button>

                <Link to="/login" className="btn btn-light btn-md btn-block">Already have an account</Link>
            </form>

        </>
    );
}

export default Signup
