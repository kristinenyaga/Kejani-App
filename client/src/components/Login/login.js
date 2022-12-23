import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
function Login({ onLogin }) {
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
                r.json().then((user) => onLogin(user));
                navigate(`/`)
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
            <form onSubmit={handleSubmit}>
                <h3>Login</h3>

                <label for="username">Email</label>
                <input type="text" placeholder="Type in your Email" id="username" value={email} onChange={(e) => setEmail(e.target.value)}/>

                <label for="password">Password</label>
                <input type="password" placeholder="Type in your Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                {errors.length > 0 &&
                    <div className='input-control'>
                        <div style={{ color: "red" }}>
                            {errors.map((error, index) =>
                                <p key={index}>{error}</p>
                            )}
                        </div>
                    </div>
                }

                <button>Log In</button>
                <div className="social">
                    <p className='p'>Don't have an account ? <span onClick={handleClick}><a href="/signup">Sign Up</a></span> </p>
                </div>
            </form>
        </>
    )
};

export default function Login(){
  return(
    <>
    <h1>Login</h1>
    </>
  )
}