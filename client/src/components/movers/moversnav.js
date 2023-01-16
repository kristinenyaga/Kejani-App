import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill,BsBackspaceFill,BsHurricane } from 'react-icons/bs';
import {FaTruck} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'

const MoversNavbar = () => {
const [nav, setNav] = useState(false)

function handleLogout(){
  localStorage.removeItem("user")
  localStorage.removeItem("token")
  navigate('/')
}
const navigate=useNavigate()
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer '>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 my-2.5'>
           <span style={{fontFamily:'Montserrat',fontSize:"46px"}} className='font-bold '>Kejani</span>
        </h1>
        
      </div>

      {/* Cart button */}
      <button style={{textAlign:"center",color:"red"}} className='bg-red text-white hidden md:flex items-center py-2 rounded-full'>
        <BsFillCartFill size={20} className='mr-2'  /> Cart
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      

      {/* Side drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen opacity-75 bg-zinc-300 z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose
            onClick={()=> setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
           <span style={{fontFamily:'Montserrat',fontSize:"38px"}} className='font-bold text-center ml-11' ><i class="fa-solid fa-house-circle-check"></i></span>
        </h2>
        <nav>
            <ul className='flex flex-col p-4 cursor-pointer '>
                <li onClick={()=>navigate('/movers')} className='text-xl py-4 flex' style={{fontFamily:'Montserrat',color:"#1A626D",fontSize:"20px"}}><FaTruck size={25} className='mr-4 cursor-pointer' /> Movers</li>
                <li onClick={()=>navigate('/cleaners')}className='text-xl py-4 flex' style={{fontFamily:'Montserrat',color:"#1A626D",fontSize:"20px"}}><BsHurricane size={25} className='mr-4 cursor-pointer' /> Cleaners</li>
                <li onClick={handleLogout}className='text-xl py-4 flex' style={{fontFamily:'Montserrat',color:"#1A626D",fontSize:"20px"}}><BsBackspaceFill size={25} className='mr-4 cursor-pointer' /> Logout</li>

            </ul>
        </nav>
      </div>
    </div>
  );
};

export default MoversNavbar;