import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
