import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login/login';
import Signup from './components/SignUp/signup';
import Homepage from './components/Homepage/homepage';


function App() {
  return (
    <>
    <Homepage />
    <Routes>
      <Route exact path="/login" element={<Login />}/>
      <Route exact path="/signup" element={<Signup />}/>
    </Routes>
    </>
  );
}

export default App;
