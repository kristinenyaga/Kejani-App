import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
 export default function Login({ onLogin,setRole }) {
    const [errors, setErrors] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    function handleClick() {

        navigate('/signup')
    }

    function handleSubmit(e) {
        e.preventDefault()
        const data = {
            email: email,
            password: password,
        }
        fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then((r) => {
            if (r.ok) {
              r.json().then((user) =>{
              onLogin(user)
              setRole(user.role)
              }
              );
            } else {
            r.json().then((err) => setErrors(err.errors));
            }
          });
        }
    
    return(
        <>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form className='login-form' onSubmit={handleSubmit}>
                <h3>Login</h3>

                <label for="username">Email</label>
                <input type="email" className='input' placeholder="Type in your Email" id="username" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label for="password">Password</label>
                <input type="password" className='input' placeholder="Type in your Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                {errors.length > 0 &&
                    <div className='input-control'>
                        <div style={{ color: "red" }}>
                            {errors.map((error, index) =>
                                <p key={index}>{error}</p>
                            )}
                        </div>
                    </div>
                }

                <button className='login-button'>Log In</button>
                <div className="social">
                    <p className='p'>Don't have an account ? <span onClick={handleClick}><a href="/signup">Sign Up</a></span> </p>
                </div>
            </form>
        </>
    )
};