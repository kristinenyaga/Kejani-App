import { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { UserContext } from '../context/user';

 export default function Login({ onLogin }) {
    const [errors, setErrors] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const { setUser,setRole,setrequestedunits } = useContext(UserContext);
    function handleClick() {

        navigate('/signup')
    }

    function handleSubmit(e) {
        e.preventDefault()
        // const data = {
        //     email: email,
        //     password: password,
        // }
        fetch('/login', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                Accepts:'application/json',
                Authorization:`Bearer${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                user:{
                    email:email,
                    password:password
                }
               
            })
        })
        .then((res) => res.json())
        .then((data) => {
            localStorage.setItem("user",JSON.stringify(data.user))
            localStorage.setItem("token",data.jwt)
            setUser(data.user)
             setRole(data.user.role)
             onLogin()
            console.log(data.user.role)
            setRole(data.user.role)
            setUser(data.user)
            setrequestedunits(data.requestunits)
            onLogin()

        })
        .catch((error) => {
          console.log(error);
        });
        setEmail('')
        setPassword('')
        };
    
    return(
        <>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form className='login-form' onSubmit={handleSubmit}>
                <h3>Login</h3>

                <label for="email">Email</label>
                <input type="email" className='input' placeholder="Type in your Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label for="password">Password</label>
                <input type="password" className='input' placeholder="Type in your Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

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