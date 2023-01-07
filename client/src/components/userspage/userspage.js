import React, { useState,useEffect } from 'react'
import UnitInfor from '../Units/unitInfor'
import UnitSearch from '../Units/unitsearch'
import Category from './category'
import './userpage.css'
function UsersPage() {

  const [units,setUnits]=useState([])
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState([])

  const categories = units
  .map((unit) => unit.category)
  .filter(
    (category, index, categories) => categories.indexOf(category) === index
  )
  .sort();

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
      <UnitInfor
      setDetails={setUnits}
      search={search}
       detail={units}
       categories={["All", ...categories]}
       selectedCategory={selectedCategory}
       setSelectedCategory={setSelectedCategory}/>
      <Category 
        categories={["All", ...categories]}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}/>
    </div>
    </>
  )
}

export default UsersPage