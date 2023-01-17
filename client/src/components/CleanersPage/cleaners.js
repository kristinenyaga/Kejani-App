import React from 'react'
import MoversNavbar from '../movers/moversnav';
import UserNavbar from '../userspage/usernavbar'
import './cleaners.css'



function Cleaners({ setUser }) {
    return (
        <div className='cleanerspage'>
            <MoversNavbar/>
            <h1 className='cleanerspage_h1'>Our Partnered Cleaners</h1>
            <blockquote className="blockquote">
                <p className="text-muted text-center">~We link you up with the best cleaners~</p>
            </blockquote>
            <div className='cleaners_container'>
                <div className='cleaners_row  shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
                    <img className="unitImg object-fit-none border rounded align-middle"
                        src="data:image/png;base64,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">
                    </img>
                    <h1> Kejani Cleaning Services </h1>
                    <div  >
                        <p><i class="fa-solid fa-envelope-circle-check"></i>info@kejanicleaning.co.ke</p>
                        <p><i class="fa-solid fa-phone-volume"></i>254 115 887 085</p>
                        <p><i class="fa-solid fa-location-dot"></i>Nairobi</p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <p><a href='https://kejanicleaning.co.ke/'>More</a></p>
                    </div>
                </div>
                <div className='cleaners_row shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
                    <img className="unitImg object-fit-none border rounded align-middle"
                        src="data:image/jpeg;base64,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">
                    </img>
                    <h1>GM Cleaning Services</h1>
                    <div>
                        <p><i class="fa-solid fa-envelope-circle-check"></i>info@gmcleaning.co.ke</p>
                        <p><i class="fa-solid fa-phone-volume"></i>+254 721 979 781</p>
                        <p><i class="fa-solid fa-location-dot"></i>Nairobi</p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <p><a href='https://gmcleaning.co.ke/'>More</a></p>
                    </div>

                </div>
                <div className='cleaners_row shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
                    <img className="unitImg object-fit-none border rounded align-middle"
                        src="https://z-p3-scontent.fmba2-1.fna.fbcdn.net/v/t39.30808-6/302134363_509376737854830_8115860351424916917_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=l-QcXp8ZcwkAX8Fq42I&_nc_ht=z-p3-scontent.fmba2-1.fna&oh=00_AfBCiGlMXaKsnutdy88mL-4Cc6K3_0WUYUlVHLo9ha_Z6g&oe=63C3C072">
                    </img>
                    <h1>Dale Cleaning Services</h1>
                    <div>
                        <p><i class="fa-solid fa-envelope-circle-check"></i>info@dale.co.ke</p>
                        <p><i class="fa-solid fa-phone-volume"></i>+254 722 922 267</p>
                        <p><i class="fa-solid fa-location-dot"></i>Kimathi House, Kimathin Street, Nairobi CBD</p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <p><a href='https://dale.co.ke/contact-us/'>More</a></p>
                    </div>
                </div>
                <div className='cleaners_row shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
                    <img className="unitImg object-fit-none border rounded align-middle"
                        src="https://z-p3-scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/311598451_441441718110876_1649397058981458789_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PfP1dp6g7v0AX9rfzQh&_nc_oc=AQmzmqewWWp-YCSr2CHjMwy5WtV3JYjhsIpokgZoNW2E-IH4Vu3VzhsTonhQngBmzaQ&_nc_ht=z-p3-scontent-mba1-1.xx&oh=00_AfAsS-ZZrueKDu7A5YbhQjPUbJpQ_KZMDNQ0Ih1rfOBqlA&oe=63C32F66">
                    </img>
                    <h1>One Way Cleaning</h1>
                    <div>
                        <p><i class="fa-solid fa-envelope-circle-check"></i>info@onewaycleaning.co.ke</p>
                        <p><i class="fa-solid fa-phone-volume"></i>+254 705 277 458</p>
                        <p><i class="fa-solid fa-location-dot"></i>2nd South Avenue Kahawa Sukari Nairobi</p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <p><a href='https://onewaycleaning.co.ke/'>More</a></p>
                    </div>


                </div>
                <div className='cleaners_row shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
                    <img className="unitImg object-fit-none border rounded align-middle"
                        src="data:image/png;base64,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">
                    </img>
                    <h1>Best Care Services</h1>
                    <div>
                        <p><i class="fa-solid fa-envelope-circle-check"></i>info@bestcarecleaning.co.ke</p>
                        <p><i class="fa-solid fa-phone-volume"></i>+254  722 566 999</p>
                        <p><i class="fa-solid fa-location-dot"></i>Philadelphia House, 3rd Flr, Tom Mboya Street</p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <p><a href='https://bestcarecleaning.co.ke/'>More</a></p>
                    </div>



                </div>
                <div className='cleaners_row shadow-sm p-3 mb-5 bg-body-tertiary rounded'>
                    <img className="unitImg"
                        src="https://pbs.twimg.com/profile_images/1368077677652025346/ZATHdsyb_400x400.jpg">
                    </img>
                    <h1>Colnet Cleaning Services</h1>
                    <div>
                        <p><i class="fa-solid fa-envelope-circle-check"></i>info@colnet.co.ke</p>
                        <p><i class="fa-solid fa-phone-volume"></i>+254 721 566 140</p>
                        <p><i class="fa-solid fa-location-dot"></i>P.O. Box 30826-00100, Nairobi</p>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <p><a href='https://www.colnet.co.ke/'>More</a></p>
                    </div>
                </div>
            </div>

            <h3></h3>
        </div>
    )
}

export default Cleaners;