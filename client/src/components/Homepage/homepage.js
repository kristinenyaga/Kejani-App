import NavBar from "../Navbar/navbar";
import './homepage.css'
import Carousel from 'react-bootstrap/Carousel';
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
          <img className="header-img" alt =''
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60">
            </img>
           
          </div>
      
    </section>

    <section className="carrousel">
      <div className="popular">
        <h1>Popular Apartments</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>

      <div className="carrousel-div">

      <Carousel>
      <Carousel.Item>
        <img
          className="d-block "
          src="https://images.unsplash.com/photo-1604014238170-4def1e4e6fcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Chandaria Flats</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Kilimani Houses</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src="https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>
            Luxious Apartments
          </h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      </div>

    </section>

    <section>
      <h1 className="choose">
        Why Choose Us
      </h1>

      <div className="container-choose-us">

        <div>
          <img
          src="../components/assets/ph_house-fill.jpg" alt =''>
          </img>
          <h3>Affordable</h3>

          <p></p>
        </div>

        <div>
          <img>
          </img>
          <h3>Fast</h3>


          <p></p>
        </div>

        <div>
          <img>
          </img>
          <h3>Secure</h3>


          <p></p>
        </div>

      </div>
    </section>
    </>
  )
}

