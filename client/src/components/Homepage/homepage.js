import NavBar from "../Navbar/navbar";
import './homepage.css'
export default function Homepage(){
  return(
    <>
    <NavBar />
    <section>
          <div className='black'>
            <h1 className="header-title">Find Your Next <span>Perfect Place</span>With Us.</h1>
            <h5 className="header-p">Kejani offers customers on demand experience for renting houses and providing transparency and almost seamless end-end service. </h5>

            <button className="header-button">Learn More</button>
          </div>

          <div className='red'>
          <img className="header-img"
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
            </img>
           
          </div>
      
    </section>
    </>
  )
}