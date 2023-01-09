import React, { useState,useEffect } from 'react'
import UnitInfor from '../Units/unitInfor'
import UnitSearch from '../Units/unitSearch'
import Category from './category'
import PriceFilter from './pricefilter'
import './userpage.css'
function UsersPage() {
  const [units,setUnits]=useState([])
  const [selectedCategory, setSelectedCategory] = useState("All");
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
  useEffect(()=>{
    fetch("/units")
    .then((res)=>res.json())
    .then((data)=>{
      setUnits(data)
    })
  }, [])
  return (
    <>
    <UnitSearch setSearch={setSearch} />
    <div className="userspage">
      <Category
        categories={["All", ...categories]}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        changePrice={handleChangePrice}
        value={selectedPrice}
        />
      <UnitInfor
      setDetails={setUnits}
      search={search}
       detail={units}
       selectedPrice={selectedPrice}
       categories={["All", ...categories]}
       selectedCategory={selectedCategory}
       setSelectedCategory={setSelectedCategory}/>
    </div>
    </>
  )
}
export default UsersPage