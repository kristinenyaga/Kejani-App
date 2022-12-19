import React, { useState } from "react";
import {useEffect} from "react"

function Login(  ) {

  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [user, setUser] = useState(null);
  console.log(user)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
     
    window.alert(`Hello ${username},  Success! Continue to KEJANI`)
    
  }

    return (
        <div>
      <form onSubmit={handleSubmit} className="field3">
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="field"
          autoComplete="off"
          value={username}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="field"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" id='submt'>Login</button>
      </form>
    </div>
    );
}

export default Login;