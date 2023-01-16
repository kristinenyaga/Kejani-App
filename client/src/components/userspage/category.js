import React from 'react'
import './category.css'
import CheckboxProton from './empty'
import PriceFilter from './pricefilter'
function Category({
  units,
  setUnits,
  newunits,
  selectedPrice,
  setSelectedPrice,
  changePrice}) {

    const filterType = (category) => {
      setUnits(
        units.filter((item) => {
          return item.category === category;
        })
      );
    };
  
   
  return (
    <div className="category">
       <div>
          <p className='font-bold text-gray-700 text-center categoryTitle font-beutify' >Category</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
               onClick={() => setUnits(newunits)}
               style={{backgroundColor:"#1A626D",color:"white",fontFamily: 'Montserrat'}}
              className='m-1   w-24 mr-1.5 h-9 rounded-lg'
            >
              All
            </button>
            <button
            onClick={() => filterType('bedsitter')}
            style={{backgroundColor:"#1A626D",color:"white",fontFamily: 'Montserrat'}}
              className='m-1 w-24 mr-1.5 h-9 rounded-lg'
            >
              bedsitter
            </button>
            <button
            onClick={() => filterType('1bedroom')}
            style={{backgroundColor:"#1A626D",color:"white",fontFamily: 'Montserrat'}}
              className='m-1 w-24 mr-1.5 h-9 rounded-lg'
            >
              1bedroom
            </button>
            <button
            onClick={() => filterType('2bedroom')}
            style={{backgroundColor:"#1A626D",color:"white",fontFamily: 'Montserrat'}}
              className='m-1 w-24 mr-1.5 h-9 rounded-lg '
            >
              2bedroom
            </button>
            <button
            onClick={() => filterType('3bedroom')}
            style={{backgroundColor:"#1A626D",color:"white",fontFamily: 'Montserrat'}}
              className='m-1 w-24 mr-1.5 h-9 rounded-lg'
            >
              3bedroom
            </button>
          </div>
        </div>
      <span className="categoryTitle font-beutify">Price Range</span>
      <PriceFilter 
      setSelectedPrice={setSelectedPrice}
      selectedPrice={selectedPrice}
      setUnits={setUnits} 
      units={units}/>
      {/* </div> */}
    </div>
  )
}
export default Category