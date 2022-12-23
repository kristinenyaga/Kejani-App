// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import Apartments from './components/Apartments/apartments'

function App(  ) {

  const [images, setImages] = useState([])
  const [detail, setDetails] = useState([])

  useEffect(()=>{

    fetch("/listers")
    .then((res)=>res.json())
    .then((image)=>{
      setImages(image)
    })
  }, [])

  useEffect(()=>{

    fetch("/units")
    .then((res)=>res.json())
    .then((det)=>{
      setDetails(det)
    })
  }, [])

  console.log(detail)
  console.log(images)

    // detail.map((imageArray) => (
    //     <Apartments
    //       key={imageArray}
    //       imageArray={imageArray}
    //     />
    //   ))
    

    // images.map((imageArray) => (
    //     <Apartments
    //       key={imageArray}
    //       imageArray={imageArray}
    //     />
    //   ))

    //   const imgs = images.map(img=>img.image_url)
    //   console.log(imgs)

      const det = detail.map(inf=>inf.price)
      console.log(det)

  return (
    <>
    < Apartments images = {images} detail = {detail} det= {det} />
      {/* <ul className ='images'>
      {images.map((imgSrc, index) => (<img className= 'properties' src={imgSrc.image_url} key={index} alt="property" />))}
      <button>Detail</button>
      </ul>
      <span className ='det'>{det}</span> */}

      
    </>
  );
}

export default App;
