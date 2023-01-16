import React from 'react'
import UserNavbar from '../userspage/usernavbar'
import './movers.css'
import { Rate } from 'antd';
import { useState } from 'react';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
function Movers({setUser}) {
  const [value, setValue] = useState(3);
  return (
    <div className='moverspage'>
      <UserNavbar setUser={setUser} />
      <h1 className='moverspage_h1'>Our Partnered Movers</h1>
      <blockquote className="blockquote">
        <p className="text-muted text-center">~We link you up with the best movers~</p>
      </blockquote>
      <div className='movers_container'>
        <div className='movers_row  shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
          <img className="unitImg object-fit-none border rounded align-middle"
        src="	https://www.johammoversltd.com/wp-content/uploads/2021/11/Jh.png">
        </img>
       
          <h1>Joham Movers</h1>
                <p><i class="fa-sharp fa-solid fa-quote-left"></i>Joham Movers is a Leading Moving Company in Nairobi, Kenya.
      We offer quick, reliable and Affordable Moving and Removal services within and outside Nairobi, Kenya. 
      <a href='https://www.johammoversltd.com'>More</a><i class="fa-sharp fa-solid fa-quote-right"></i></p>
    <span className='span_star'>
      <Rate tooltips={desc} onChange={setValue} value={value} />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
    </span>
        <h3>Contact</h3>
        <div  >
        <p><i class="fa-solid fa-envelope-circle-check"></i>info@johammoversltd.com</p>
        <p><i class="fa-solid fa-phone-volume"></i>254 20 2001573</p>
        <p><i class="fa-solid fa-location-dot"></i>Trance Towers,Tsavo Road,Off Melili Road Off Mombasa Road</p>
        </div>
      
        </div>
        <div className='movers_row shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
        <img className="unitImg object-fit-none border rounded align-middle"
        src="https://touchmovers.co.ke/images/tm/niggaz.jpg">
        </img>
          <h1>Touch Movers</h1>
          <p><i class="fa-sharp fa-solid fa-quote-left"></i>We specialize in corporate relocation, long distance and residential moving. We understand that you have more to worry about than the physical move. Let a reputable moving company like Touch Movers help you relieve some of that stress.<a href='https://touchmovers.co.ke'>More</a><i class="fa-sharp fa-solid fa-quote-right"></i></p>
          <span>
          <Rate tooltips={desc} onChange={setValue} value={value} />
          {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
        </span>
          <h3>Contact</h3>
          <div>
          <p><i class="fa-solid fa-envelope-circle-check"></i>info@touchmovers.co.ke</p>
          <p><i class="fa-solid fa-phone-volume"></i>+254 728 938038</p>
          <p><i class="fa-solid fa-location-dot"></i>Membley, Ruiru. Nairobi, Kenya</p>
          </div>
     
        </div>
        <div className='movers_row shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
        <img className="unitImg object-fit-none border rounded align-middle"
        src="https://absolutemovers.co.ke/wp-content/uploads/2021/05/Absolute-movers-logo.jpg">
        </img>
          <h1>Absolute Movers Kenya</h1>
          <p><i class="fa-sharp fa-solid fa-quote-left"></i>Absolute Movers Kenya is a fully licensed moving services company that offers international and domestic moving services for everyone ranging from commercial establishments to residential houses.<a href='https://absolutemovers.co.ke'>More</a><i class="fa-sharp fa-solid fa-quote-right"></i></p>
          <Rate allowHalf defaultValue={2.5} />;
          <h3>Contact</h3>
          <div>
          <p><i class="fa-solid fa-envelope-circle-check"></i>info@absolutemovers.co.ke</p>
          <p><i class="fa-solid fa-phone-volume"></i>+254 728 993481</p>
          <p><i class="fa-solid fa-location-dot"></i>Makadara AlongJogoo Road Nairobi Kenya</p>
          </div>
        </div>
        <div className='movers_row shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
        <img className="unitImg object-fit-none border rounded align-middle"
        src="https://exublh5dds313.s3.amazonaws.com/wp-content/uploads/2016/08/taylor-logo.png">
        </img>
          <h1>Taylor Movers</h1>
          <p><i class="fa-sharp fa-solid fa-quote-left"></i>We specialize in local and international relocations. Taylor Movers is a privately held firm committed to excellence through providing relocations, transportation, warehousing, expatriate mobility services and logistics services efficiently.<i class="fa-sharp fa-solid fa-quote-right"></i><a href='https://taylorea.com'>More</a></p>
          <Rate />;
          <h3>Contact</h3>
          <div>
          <p><i class="fa-solid fa-envelope-circle-check"></i> info@taylorea.com</p>
          <p><i class="fa-solid fa-phone-volume"></i>+254 721410517</p>
          <p><i class="fa-solid fa-location-dot"></i>Nazarene Complex Suite 1, Central Church of The Nazarene Ngong Road,</p>
          <p>mombasa branch..</p>
          <p><i class="fa-solid fa-phone-volume"></i>+254 758590998</p>
          <p><i class="fa-solid fa-location-dot"></i>Moi Avenue,Ivory Building, 2nd Floor</p>
          </div>

         
        </div>
        <div className='movers_row shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
        <img className="unitImg object-fit-none border rounded align-middle"
        src="https://cantsmovers.com/wp-content/uploads/2021/08/cants-movers-logo.jpeg">
        </img>
          <h1>Cants Movers</h1>
          <p><i class="fa-sharp fa-solid fa-quote-left"></i>Cants Movers Kenya is a customer oriented moving company based in Nairobi Kenya, providing comprehensive and tailored moving services throughout the whole of Kenya.<a href='https://cantsmovers.com'>More</a><i class="fa-sharp fa-solid fa-quote-right"></i></p>
          <span>
            <Rate tooltips={desc} onChange={setValue} value={value} />
            {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
          </span>
          <h3>Contact</h3>
          <div>
          <p><i class="fa-solid fa-envelope-circle-check"></i> info@cantsmovers.com</p>
          <p><i class="fa-solid fa-phone-volume"></i>+254  708 703456</p>
          <p><i class="fa-solid fa-location-dot"></i>Makadara Along Jogoo Road Near KCB Bank</p>
          </div>
       


        </div>
        <div className='movers_row shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
        <img className="unitImg"
        src="https://nellions.co.ke/wp-content/uploads/2022/12/logo-nel.webp">
        </img>
          <h1>Nellions Moving & Relocations Company</h1>
          <p><i class="fa-sharp fa-solid fa-quote-left"></i>At Nellions Moving & Relocations, we have earned a reputation for being the best movers in Kenya through our firm commitment to service excellence, integrity, and expertise.<a href='https://nellions.co.ke'>More</a><i class="fa-sharp fa-solid fa-quote-right"></i></p>
          <span>
            <Rate tooltips={desc} onChange={setValue} value={value} />
            {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
          </span>
          <h3>Contact</h3>
          <div>
          <p><i class="fa-solid fa-envelope-circle-check"></i>move@nellions.co.ke</p>
          <p><i class="fa-solid fa-phone-volume"></i>+2547700000002</p>
          <p><i class="fa-solid fa-location-dot"></i>Muringa Road, Kilimani, Nairobi, Kenya</p>
          </div>
         

        </div>
        <div className='movers_row shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
        <img className="unitImg"
        src="https://www.businesslist.co.ke/img/ke/x/1589439866-33-sunlink-movers.jpg">
        </img>
          <h1>Sunlink Movers Kenya</h1>
          <p><i class="fa-sharp fa-solid fa-quote-left"></i>
          Sunlink Movers Kenya is a trusted moving services company in Nairobi,Kenya providing best quality and reliable moving services at affordable cost.<a href='https://sunlink-movers.co.ke'>More</a><i class="fa-sharp fa-solid fa-quote-right"></i>
          </p>
          <span>
            <Rate tooltips={desc} onChange={setValue} value={value} />
            {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
          </span>
          <h3>Contact</h3>
          <div>
          <p><i class="fa-solid fa-envelope-circle-check"></i>info@sunlinkmovers.com</p>
          <p><i class="fa-solid fa-phone-volume"></i>+254 727 665 294</p>
          <p><i class="fa-solid fa-location-dot"></i>Buruburu, Nairobi Kenya</p>
          </div>


        </div>
        <div className='movers_row shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
        <img className="unitImg"
        src="https://alphamovers.co.ke/wp-content/uploads/2021/02/Alpha-movers-logo.jpg">
        </img>
          <h1>Alpha Movers Kenya </h1>
          <p><i class="fa-sharp fa-solid fa-quote-left"></i>
          Alpha Movers Kenya is a premium moving services company in Nairobi Kenya whose sole intent is geared towards leaving a permanent positive impact on our clients..<a href='https://alphamovers.co.ke'>More</a><i class="fa-sharp fa-solid fa-quote-right"></i>
          </p>
          <span>
            <Rate tooltips={desc} onChange={setValue} value={value} />
            {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
          </span>
          <h3>Contact</h3>
          <div>
          <p><i class="fa-solid fa-envelope-circle-check"></i>info@alphamovers.co.ke</p>
          <p><i class="fa-solid fa-phone-volume"></i>+254 722 102902</p>
          <p><i class="fa-solid fa-location-dot"></i>Buruburu Nairobi Kenya</p>
          </div>


        </div>
        <div className='movers_row shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
        <img className="unitImg"
        src="	https://www.rhinopromptmovers.com/wp-content/uploads/2021/11/Rhino-Prompt-Movers-Kenya.png">
        </img>
          <h1>Rhino Prompt Movers Kenya</h1>
          <p><i class="fa-sharp fa-solid fa-quote-left"></i>
          We are affordable and professional movers in Nairobi. Rhino Prompt Movers Kenya ensures that all your moving needs are met in a timely and efficient manner.<a href='https://www.rhinopromptmovers.com'>More</a><i class="fa-sharp fa-solid fa-quote-right"></i>
          </p>
          <span>
            <Rate tooltips={desc} onChange={setValue} value={value} />
            {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
          </span>
          <h3>Contact</h3>
          <div>
          <p><i class="fa-solid fa-envelope-circle-check"></i>sales@rhinopromptmovers.com</p>
          <p><i class="fa-solid fa-phone-volume"></i>+254 720030488</p>
          <p><i class="fa-solid fa-location-dot"></i>Fifth Avenue, Ngong Road</p>
          </div>


        </div>
        

        


      </div>

      <h3></h3>
    </div>
  )
}

export default Movers