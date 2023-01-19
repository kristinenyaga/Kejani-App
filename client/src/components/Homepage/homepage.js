import NavBar from "../Navbar/navbar";
import './homepage.css'
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate()
  function handleClick() {
    navigate('/login')
  }


  return (
    <>
      <NavBar />
      {/* <div className=''>
      <Header/>
    </div> */}
      <div className="header">
        <div className="left">
          <h1 className="header-title">Find Your Next <span>Perfect Place</span>With Us.</h1>
          <h5 className="header-p">Kejani offers customers on demand experience for renting houses and providing transparency and almost seamless end-end service. </h5>
          <button className="header-button rounded" onClick={handleClick}>Learn More</button>
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
              Did you know?
              <hr></hr>
              Roughly 3 in every 4 buyers or lessees use the Internet to find the next perfect place to call home.
              Grab the chance and increase your property visibility with one of the fastest growing source of inquiry.
            </p>
            <button className="section2btn rounded" onClick={handleClick}>List House</button>
          </div>

          <div className="section2row">
            <i class="fa-sharp fa-solid fa-house"></i>
            <p className="section2row-ptag">
              Looking for something easy to use from the comfort of wherever you are? Looking to avoid the hustle of searching for property? Looking forward to eliminating the middle man and directly deal with the seller hence you get the actual pricing of the property.
            </p>
            <button className="section2btn rounded" onClick={handleClick}>Rent House</button>

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
              src="https://images.unsplash.com/photo-1624204386084-dd8c05e32226?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50JTIwYnVpbGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60">
            </img>
            <h3>Kasarani House</h3>
            <h4><i class="fa-solid fa-location-dot"></i>Evagrin,Acquatic Close</h4>
            <h5>100 houses</h5>
            <div className="container-flex">
              <p>Residential</p>
            </div>

          </div>

          <div className="section4-row">
            <img
              src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load">
            </img>
            <h3>Muthangari Hse</h3>
            <h4><i class="fa-solid fa-location-dot"></i>Samia,Othaya Road</h4>
            <h5>100 houses</h5>
            <div className="container-flex">
              <p>Hostel</p>
            </div>

          </div>

          <div className="section4-row">
            <img
              src="https://images.pexels.com/photos/323781/pexels-photo-323781.jpeg?auto=compress&cs=tinysrgb&w=1600">
            </img>
            <h3>Kilimani House</h3>
            <h4><i class="fa-solid fa-location-dot"></i>Chinua,Ng Road</h4>
            <h5>100 houses</h5>
            <div className="container-flex">
              <p>Residential</p>
            </div>

          </div>

          <div className="section4-row">

            <img
              src="https://images.unsplash.com/photo-1512845296467-183ccf124347?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
            </img>
            <h3>Parklands Hse</h3>
            <h4><i class="fa-solid fa-location-dot"></i>Gandhi,Bhanderi Road</h4>
            <h5>90 houses</h5>
            <div className="container-flex">
              <p>Hostel</p>
            </div>

          </div>

        </div>
      </div>

      <div className="section5">
        <h1 className="choose">What Customers Are Saying About Kejani</h1>
        <div className="section-5container">
          <div className="section5-row ">
            <p>House hunting was made alot easier by this website which was very informative and gave a lot of useful information. The process was very streamlined and easy. I would highly recommend Kejani.</p>
            <div className="customers">

              <img src="https://images.pexels.com/photos/1678821/pexels-photo-1678821.jpeg?auto=compress&cs=tinysrgb&w=400">
              </img>
              <h3>Wafula Ibrahim</h3>


            </div>

          </div>

          <div className="section5-row">
            <p>Highly recommend Kejani. You Will find what you were looking for in much shorter time than expected with great selections and within your budget. I did and so will you. Special thanks to the team for quick response to inquiries.</p>
            <div className="customers">

              <img src="https://images.pexels.com/photos/1002022/pexels-photo-1002022.jpeg?auto=compress&cs=tinysrgb&w=400">
              </img>
              <h3>Wanjiku Aketch</h3>

            </div>

          </div>

        </div>

      </div>


        <div className="section6-container"></div>

        <section className="bg-dark-green">
          <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="sm:col-span-2">
                <a
                  href="/"
                  aria-label="Go home"
                  title="Company"
                  className="inline-flex items-center"
                >
                  <div>
                    <i class="fa-solid fa-house-circle-check text-white"></i>

                  </div>
                  <span className="ml-2 text-xl font-bold tracking-wide text-white">
                    Kejani
                  </span>
                </a>
                <div className="mt-6 lg:max-w-sm">
                  <p className="mt-4 text-sm text-white">
                    Kejani offers customers on demand experience for renting houses and
                    providing transparency and almost seamless end-end service.
                  </p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-base font-bold tracking-wide text-white">
                  Contacts
                </p>
                <div className="flex">
                  <p className="mr-1 text-white">Phone:</p>
                  <a

                    aria-label="Our phone"
                    title="Our phone"
                    className="transition-colors duration-300 text-white hover:text-deep-purple-800"
                  >
                    (+254)-734-452-134
                  </a>
                </div>
                <div className="flex">
                  <p className="mr-1 text-white">Email:</p>
                  <a
                    href="mailto:info@kejani.mail"
                    aria-label="Our email"
                    title="Our email"
                    className="transition-colors duration-300 text-white hover:text-deep-purple-800"
                  >
                    info@kejani.mail
                  </a>
                </div>
                <div className="flex">
                  <p className="mr-1 text-white">Address:</p>
                  <a
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Our address"
                    title="Our address"
                    className="transition-colors duration-300 text-white hover:text-deep-purple-800"
                  >
                    Damino Street - Nairobi, Kenya.
                  </a>
                </div>
              </div>
              <div>
                <span className="text-base font-bold tracking-wide text-white">
                  Social
                </span>
                <div className="flex items-center mt-1 space-x-3">
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                      <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                    </svg>
                  </a>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                      <circle cx="15" cy="15" r="4" />
                      <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                    </svg>
                  </a>
                  <a
                    href="/"
                    className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                  </a>
                </div>
                <p className="mt-4 text-sm text-white">
                  Tell a friend to tell a friend that you could be neighbours.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
              <p className="text-sm text-white">
                © Copyright 2023 Kejani Inc. All rights reserved.
              </p>
              <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                <li>
                  <a
                    href="/"
                    className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    F.A.Q
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>


      </>
      )
}

// https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1600
// https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
// https://images.pexels.com/photos/1824392/pexels-photo-1824392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
// https://img.freepik.com/premium-photo/modern-australian-house-with-garage_224530-490.jpg?w=1380
// https://img.freepik.com/premium-photo/3d-rendering-modern-house_62754-1884.jpg?w=1380
// https://img.freepik.com/free-photo/modern-buildings_1127-2851.jpg?w=1380&t=st=1671981095~exp=1671981695~hmac=4e1e635cc6bbcd0ccb1a3085c42f1093cf7ab9ff048ce5dfe40cbaee364b28ad