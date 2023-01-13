import React, { useState,useEffect } from 'react'
import UnitInfor from '../Units/unitInfor'
import UnitSearch from '../Units/unitSearch'
import Unitspecs from '../Units/unitspecs'
import Category from './category'
import PriceFilter from './pricefilter'
import './userpage.css'
function UsersPage() {
  const [units,setUnits]=useState([])
  const [selectedCategory, setSelectedCategory] = useState("");
  const [search, setSearch] = useState([])
  const [selectedPrice, setSelectedPrice] = useState([5000, 50000]);

  const [category, setCategory] = useState([
    { id: 1, checked: false, label: 'bedsitter' },
    { id: 2, checked: false, label: '1bedroom' },
    { id: 3, checked: false, label: '2bedroom' },
    { id: 4, checked: false, label: '3bedroom' }

  ]);
  const categories = units
  .map((unit) => unit.category)
  .filter(
    (category, index, categories) => categories.indexOf(category) === index
  )
  .sort();

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  const handleChangeChecked = (cat,id) => {
    console.log(cat)
    const categoryStateList = category;
    const changeCheckedCategories = categoryStateList.map((item) =>
      item.id === id ? { ...item, checked: !(item.checked )} : item
    );
    setCategory(changeCheckedCategories);
    console.log(category)
  };
  useEffect(()=>{
    fetch("/units")
    .then((res)=>res.json())
    .then((data)=>{
      setUnits(data)
    })
  }, [])
  const filterItem = (categItem) => {
    const updatedItems = units.filter((curElem) => {
      if(categItem === "All"){
        setUnits(units)

    }
    else{
      return curElem.category === categItem;
    }
        
    });

    setUnits(updatedItems);
}

  function applyFilters(){
    let displayedUnits=units
     
        if(selectedCategory){
            displayedUnits = displayedUnits.filter(
                (unit) =>{
                    if(selectedCategory === "All"){
                        return unit.category !== selectedCategory

                    }
                    else{
                        return unit.category === selectedCategory
                    }
                }
                       
              );
        }
        // Cuisine Filter
          const categoryChecked = category
          .filter((item) => item.checked)
          .map((item) => item.label.toLowerCase());

        if (categoryChecked.length) {
          displayedUnits = displayedUnits.filter((item) =>
          // categoryChecked.includes(item.category)
          categoryChecked.includes(item.category)
          );
        }
       // Search Filter
    if (search) {
      displayedUnits = displayedUnits.filter(
        (item) =>
          item.apartment.apartment_type.toLowerCase().search(search.toLowerCase().trim()) !==
          -1
      );
    }
        
        const minPrice = selectedPrice[0];
        const maxPrice = selectedPrice[1];

        displayedUnits = displayedUnits.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice
        );
        setUnits(displayedUnits)

    }
        useEffect(() => {
            applyFilters();
          }, [selectedCategory,search,selectedPrice]);
        
        
        


  
  return (
    <>
    <UnitSearch value={search}
        changeInput={(e) => setSearch(e.target.value)} />
    <div className="userspage">
      
      <Category
        categories={["All", ...categories]}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        changePrice={handleChangePrice}
        value={selectedPrice}
        category={category}
        changeChecked={handleChangeChecked}
        filterItem={filterItem}
        units={units}
        setUnits={setUnits}
        /> 
        <div className='units'>
        {units.map((data) => (
            <Unitspecs key={data.id} data={data} />
        ))}
        </div>
    </div>
    </>
  )
}
export default UsersPage