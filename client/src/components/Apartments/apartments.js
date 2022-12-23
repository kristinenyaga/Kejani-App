import React from 'react'
import './apartments.css'

function Apartments({detail, images}) {

    console.log(detail)
    console.log(images)

    const details = detail.map((det)=>(det))
    console.log(details)

  return (
    <>
      {/* <div className ='images'>
      <img className='properties' src= {imgs} alt = 'property picture'/>
      </div> */}
     <div className="images">
     {detail.map((imgSrc, index) => (<img className= 'properties' src={imgSrc.image_url} key={index} alt="property" />))}
     
     {/* <img className= 'properties' src={details.image_url} alt="property" />
     <h2>{details.location}</h2> */}
     <button>More details</button>
     </div>
    </>
  );
}


export default Apartments;