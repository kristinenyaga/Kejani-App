import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
function Login({ setUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    function handleClick() {
        navigate('/signup')
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    setUser(user)
                
                navigate(`/`)
            });
         } else {
                r.json().then((err) => alert(err.errors));
            }
        });
    }
    return(
        <>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form onSubmit={handleSubmit}>
                <h3>Login</h3>

                <label htmlFor="username">Email</label>
                <input type="text" placeholder="Type in your Email" id="username" value={email} onChange={(e) => setEmail(e.target.value)}/>

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Type in your Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                <button type='submit'>Log In</button>
                <div className="social">
                    <p>Don't have an account ? <span onClick={handleClick}><a href="/signup">Sign Up</a></span> </p>
                </div>
            </form>
        </>
    )
};

export default Login;