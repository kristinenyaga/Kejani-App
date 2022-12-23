import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login/login';
import Signup from './components/SignUp/signup';
import Homepage from './components/Homepage/homepage';


function App() {
  const [user, setUser] = useState(null);
  return (
    <>
    <Homepage user={user} setUser={setUser}/>
    <Routes>
      <Route exact path="/login" element={<Login />}/>
      <Route exact path="/signup" element={<Signup />}/>
    </Routes>
    </>
  );
}

export default App;
