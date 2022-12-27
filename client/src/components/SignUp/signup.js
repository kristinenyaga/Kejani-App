import React from 'react';
import { useState } from 'react';
import './signup.css'

function SignUp() {
    // States for registration
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('');
    const [role, setRole] = useState('')

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
    const handleLocation = (e) => {
        setLocation(e.target.value);
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
        if (name === '' || number === '' || location === '' || email === '' || password === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
        
 

        fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                username:name,
                location:location,
                email:email,
                phone_number:number,
                password:password
            })
        })
    };


    const handleRole=(e)=>{
        setRole(e.target.value)
        setSubmitted(false)

    }

   

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
                <h5 className='signup-h5'>All fields are required!</h5>
            </div>
        );
    };


    return (
        <div className="form" onSubmit={handleSubmit}>
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
                        onChange={handleLocation}
                        value={location}
                        name={location}
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

                <div className="mb-3">
                    <label>Password Confirmation</label>
                    <input
                        type="password"
                        onChange={handlePassword}
                        value={password}
                        name={password}
                        className="form-control"
                        placeholder="password confirmation"
                    />
                </div>

                <div className="mb-3">
                    {/* <label htmlFor='roles'>Roles</label> */}
                <div className='custom-select'>
                <select onChange={handleRole}>
                    <option value='SE'> Sign Up As User</option>
                    <option value='Marketers'>Sign Up As Lister</option>
                </select>

                </div>
                </div>

                <div className="d-grid">
                    <button  type="submit" className="btn btn-primary signup-button">
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