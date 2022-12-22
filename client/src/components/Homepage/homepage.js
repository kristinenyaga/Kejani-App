import NavBar from "../Navbar/navbar";
import './homepage.css'
export default function Homepage(){
  return(
    <>
    <div>

    <NavBar />
    <img className="homepage-img"
    src='https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'>
    </img>

    </div>
    <h1>Home</h1>
    </>
  )
}