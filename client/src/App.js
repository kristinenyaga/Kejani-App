import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/login";
import NavBar from "./Navbar";

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <NavBar setUser={setUser} user={user}/>
      <Routes>
        <Route exact path="/login" element={<Login setUser={setUser}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
