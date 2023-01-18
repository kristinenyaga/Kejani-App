import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom'
import "./navbar.css"
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const nav = useNavigate();
  function handleClick() {
    nav('/signup')
  }
  return (
    <div>
      <nav className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center flex-row justify-between gap-96">
              <Navbar.Brand className='kejani mr-6'><i class="fa-solid fa-house-circle-check"></i>Kejani</Navbar.Brand>
              <div className="hidden md:block justify-end ">
                <div className="ml-10 flex items-baseline space-x-4 ">
                  <a
                    className="  text-white px-3 py-2 rounded-md text-lg font-medium no-underline"
                  >
                    <Nav.Link style={{backgroundColor: "rgb(27, 98, 110)"}}as={Link} className='text-white py-8 w-32 text-center h-9 leading-8 no-underline list-none rounded ' to="/signup" onClick={handleClick}>Signup</Nav.Link>
                  </a>
                  <a
                    className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-lg font-medium no-underline"
                  >
                    <Nav.Link style={{backgroundColor: "rgb(27, 98, 110)"}}as={Link} className='text-white py-8 w-32 text-center h-9 leading-8 no-underline list-none rounded ' to="/login">Login</Nav.Link>
                  </a>
                  <a
                    className="text-gray-300  hover:text-white px-3 py-2 no-underline  text-lg font-medium"
                  >
                    <Nav.Link  style={{backgroundColor: "rgb(27, 98, 110)"}}as={Link} className='text-white py-8 w-32 text-center h-9 leading-8 no-underline list-none rounded ' to="/contact" >Contact Us</Nav.Link>
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  className=" text-white block px-3 py-2 rounded-md text-xl font-medium"
                >
                  <Nav.Link as={Link} className='auth' to="/signup" onClick={handleClick}>Signup</Nav.Link>
                </a>
                <a
                  className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-xl font-medium"
                >
                  <Nav.Link as={Link} className='auth' to="/login">Login</Nav.Link>
                </a>
                <a
                  className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-xl font-medium"
                >
                  <Nav.Link as={Link} className='auth' to="/contact" >Contact Us</Nav.Link>
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
      <main>
        <div>
          {/* <!-- Replace with your content --> */}
          {/* <!-- /End replace --> */}
        </div>
      </main>
    </div>
  );
}
export default NavBar;