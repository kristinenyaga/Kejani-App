import React from 'react';
import { useState } from 'react';

function SignUp() {

    // States for registration
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('');

    // const [error, setError] = useState('');


    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);


    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    // Handling the number change
    const handleNumber = (e) => {
        setNumber(e.target.value);
        setSubmitted(false);
    };

    // Handling the location change
    const handleUserLocation = (e) => {
        setUserLocation(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || number === '' || userLocation === '' || email === '' || password === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }

        // fetch('/sign-up', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // })
        //     .then((r) => {
        //         if (r.ok) {
        //             r.json().then((user) => onSignup(user));
        //             navigate(`/`)
        //         } else {
        //             r.json().then((err) => setErrors(err.errors));
        //         }
        //     });
    };

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h6>{name} successfully registered!</h6>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h5>All fields are required!</h5>
            </div>
        );
    };


    return (
        <div className="form">
            <form>
                <h3>Sign Up</h3>
                <div className="mb-3">
                    <label>Name</label>
                    <input
                        type="text"
                        onChange={handleName}
                        value={name}
                        name={name}
                        className="form-control"
                        placeholder="Enter your name"
                    />
                </div>

                <div className="mb-3">
                    <label>Email Address</label>
                    <input
                        type="email"
                        onChange={handleEmail}
                        value={email}
                        name={email}
                        className="form-control"
                        placeholder="Enter your email"
                    />
                </div>

                <div className="mb-3">
                    <label>Phone Number</label>
                    <input
                        type="integer"
                        onChange={handleNumber}
                        value={number}
                        name={number}
                        className="form-control"
                        placeholder="Enter your phone number"
                    />
                </div>

                <div className="mb-3">
                    <label>Location</label>
                    <input
                        type="text"
                        onChange={handleUserLocation}
                        value={userLocation}
                        name={userLocation}
                        className="form-control"
                        placeholder="Enter your location" />
                </div>

                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        onChange={handlePassword}
                        value={password}
                        name={password}
                        className="form-control"
                        placeholder="Enter your password"
                    />
                </div>

                <div className="d-grid">
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Already registered <a href="/login">login?</a>
                </p>
            </form>

            {/* Calling to the methods */}
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>
        </div>
    )
}

export default SignUp