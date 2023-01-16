import React, { useState,useEffect } from 'react'
import UnitInfor from '../Units/unitInfor'
import UnitSearch from '../Units/unitSearch'
import Unitspecs from '../Units/unitspecs'
import Category from './category'
import Emptyy from './empty'
import PriceFilter from './pricefilter'
import UserNav from './usernavbar'
import './userpage.css'
function UsersPage({handleRequest}) {
  const [units,setUnits]=useState([])
  const [newunits,setNewUnits]=useState(units)
  const [selectedCategory, setSelectedCategory] = useState("");
  const [search, setSearch] = useState([])
  const [selectedPrice, setSelectedPrice] = useState([5000, 50000]);

  
  const categories = units
  .map((unit) => unit.category)
  .filter(
    (category, index, categories) => categories.indexOf(category) === index
  )
  .sort();

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

   console.log(units)
  
  useEffect(()=>{
    fetch("/units")
    .then((res)=>res.json())
    .then((data)=>{
      setUnits(data)
      setNewUnits(data)
    })
  }, [])


 


  
  return (
    <>
    <UserNav/>
       <UnitSearch 
       setSearch = {setSearch}
       units={units}
      setUnits={setUnits}
      newunits={newunits}
      search={search}/>
    <div className="userspage">
      
      <Category
      units={units}
      setUnits={setUnits}
      newunits={newunits}
      selectedPrice={selectedPrice}
      setSelectedPrice={setSelectedPrice}
     
        /> 
        <div className='units'>

        {units.length === 0?<Emptyy/>:
        units.map((data) => (
            <Unitspecs key={data.id} data={data} handleRequest={handleRequest} />
        ))}
        </div>
    </div>
    </>
  )
}
export default UsersPage