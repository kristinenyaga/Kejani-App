import NavBar from "../Navbar/navbar";
import './homepage.css'
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";

export default function Homepage(){
  const navigate = useNavigate()
  function handleClick(){
    navigate('/login')
  }

  return(
    <>
    <NavBar />
    <div className="header">
     <div className="left">
        <h1 className="header-title">Find Your Next <span>Perfect Place</span>With Us.</h1>
        <h5 className="header-p">Kejani offers customers on demand experience for renting houses and providing transparency and almost seamless end-end service. </h5>
        <button className="header-button" onClick={handleClick}>Learn More</button>
        <div className="header-container">
          <div className="row1">
            <p>1500+</p>
            <span>Ready Properties</span>

          </div>
          <div className="row2">
          <p>500+</p>
          <span>Happy Customers</span>


          </div>

        </div>
     </div>

     <div className="right">
       
       </div>
     
   </div>

   <div className="section2">
    <h1 className="section2h1">
      Whether You Are Renting Or Listing A House This Is The Place For You.
    </h1>

    <div className="section2container">
      <div className="section2row">
        
      <i class="fa-solid fa-house-circle-check"></i>
      <p className="section2row-ptag">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis finibus tellus, ut hendrerit dui. Curabitur sed ullamcorper metus. Maecenas vel dui in quam tempor maximus vitae vel felis.
      </p>
      <button className="section2btn" onClick={handleClick}>List House</button>
      </div>

      <div className="section2row">
      <i class="fa-sharp fa-solid fa-house"></i>
      <p className="section2row-ptag">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis finibus tellus, ut hendrerit dui. Curabitur sed ullamcorper metus. Maecenas vel dui in quam tempor maximus vitae vel felis.
      </p>
      <button className="section2btn" onClick={handleClick}>Rent House</button>

      </div>

    </div>

    <div className="section3">
      <h1 className="choose">
        Why Choose Kejani
      </h1>

      <div className="section3container"> 

      <div className="section3row">
        <img className="section3-img"
        src="https://plus.unsplash.com/premium_photo-1661274151793-173c09ced789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGJ1c2luZXNzJTIwZGVhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60">
        </img>
       
      </div>
      <div className="section3row">
        <div className="facilities">
          <div>
            <h3 className="section3-h3">Transport Services</h3>
            <p className="section3-ptag">We provide transport when you are ready to move</p>
          </div>
          <div>
            <h3 className="section3-h3">
              Cleaning Services
            </h3>
            <p className="section3-ptag">We link you up with cleaning companies for your new house</p>
          </div>
          <div>
            <h3 className="section3-h3">Affordable</h3>
            <p className="section3-ptag">We provide houses that are pocket friendly</p>
          </div>

          <div>
            <h3 className="section3-h3">Security</h3>
            <p className="section3-ptag">We offer houses in a secure neighbourhood</p>
          </div>
        </div>
      
      </div>
     
      
      </div>

    </div>

   </div>

   <div className="section4">
    <h1 className="section4-h1">Featured Properties</h1>
      <div className="section4-container">
        <div className="section4-row">
          <img
          src="https://images.pexels.com/photos/323781/pexels-photo-323781.jpeg?auto=compress&cs=tinysrgb&w=1600">
          </img>
          <h3>Kilimani Hse</h3>
          <h4><i class="fa-solid fa-location-dot"></i>  Chinua,Ng Road</h4>
          <h5>100 houses</h5>
          <div className="container-flex">
            <p>Residential</p>
            <h4 onClick={handleClick}>More <i class="fa-solid fa-arrow-right"></i></h4>
          </div>

        </div>

        <div className="section4-row">
        <img
          src="https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&cs=tinysrgb&w=1600">
        </img>
        <h3>Kilimani Hse</h3>
        <h4><i class="fa-solid fa-location-dot"></i> Chinua,Ng Road</h4>
        <h5>100 houses</h5>
        <div className="container-flex">
        <p>Hostel</p>
        <h4 onClick={handleClick}>More <i class="fa-solid fa-arrow-right"></i></h4>
        </div>

        </div>

        <div className="section4-row">
        <img
          src="https://images.pexels.com/photos/323781/pexels-photo-323781.jpeg?auto=compress&cs=tinysrgb&w=1600">
        </img>
        <h3>Kilimani Hse</h3>
        <h4><i class="fa-solid fa-location-dot"></i> Chinua,Ng Road</h4>
        <h5>100 houses</h5>
        <div className="container-flex">
        <p>Residential</p>
        <h4 onClick={handleClick}>More <i class="fa-solid fa-arrow-right"></i></h4>
        </div>
        
        </div>

        <div className="section4-row">

        <img
          src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load">
        </img>
        <h3>Kilimani Hse</h3>
        <h4><i class="fa-solid fa-location-dot"></i> Chinua,Ng Road</h4>
        <h5>100 houses</h5>
        <div className="container-flex">
        <p>Hostel</p>
        <h4 onClick={handleClick}>More <i class="fa-solid fa-arrow-right"></i></h4>
        </div>

        </div>

      </div>
   </div>

   <div className="section5">
   <h1>What Customers Are Saying About Kejani</h1>
   <div className="section-5container">
    <div className="section5-row">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus sodales nibh a suscipit. Aenean luctus, lacus eu pulvinar tempor, lacus orci varius purus, ut iaculis tellus eros ac ex. Pellentesque finibus quis risus a mollis. Morbi eros urna, pellentesque sed pulvinar in, tempus a arcu.</p>
      <div className="customers">
      
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60">
          </img>
          <h3>Mia Jonnes</h3>

        
      </div>

    </div>

    <div className="section5-row">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus sodales nibh a suscipit. Aenean luctus, lacus eu pulvinar tempor, lacus orci varius purus, ut iaculis tellus eros ac ex. Pellentesque finibus quis risus a mollis. Morbi eros urna, pellentesque sed pulvinar in, tempus a arcu.</p>
      <div className="customers">
        
      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60">
      </img>
        <h3>Mia Jonnes</h3>
        
      </div>

    </div>

   </div>
  
   </div>

   
    <div className="section6-container">
    <div>
      <h3>Kejani</h3>
      <p>Kejani offers customers on demand experience for renting houses and providing transparency and almost seamless end-end service. </p>

    </div>
    
    <div>
      <h3>Contact Us</h3>
      <div className="icon-container">
        
        <div>
        <i class="fa-brands fa-facebook"></i>

        </div>
        
        <div>
        <i class="fa-brands fa-instagram"></i>
          
        </div>

        <div>
        <i class="fa-brands fa-twitter"></i>
          
        </div>
      </div>

    </div>

    <div>
      <h3>Office</h3>
      <p>Damino Street, CBD254,Kenya +254734452134</p>

    </div>


    </div>
    
    <div className="footer">
      <h1>Copyright 2022  Kejani | All Rights Reserved </h1>
    </div>
 
   
   </>
  )
}

// https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1600
// https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
// https://images.pexels.com/photos/1824392/pexels-photo-1824392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
// https://img.freepik.com/premium-photo/modern-australian-house-with-garage_224530-490.jpg?w=1380
// https://img.freepik.com/premium-photo/3d-rendering-modern-house_62754-1884.jpg?w=1380
// https://img.freepik.com/free-photo/modern-buildings_1127-2851.jpg?w=1380&t=st=1671981095~exp=1671981695~hmac=4e1e635cc6bbcd0ccb1a3085c42f1093cf7ab9ff048ce5dfe40cbaee364b28ad