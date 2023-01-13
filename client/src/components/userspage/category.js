import React from 'react'
import './category.css'
import CheckboxProton from './checkbox'
import PriceFilter from './pricefilter'
function Category({
  categories,
  setSelectedCategory,
  selectedCategory,
  value,
  changePrice,
  category, 
  changeChecked,
  filterItem,
  units,
  setUnits}) {
  return (
    <div className="category">
      <div className="categoryItem">
        <span className="categoryTitle font-beutify">Category</span>
        <button onClick={() =>setUnits(units)}>All</button>
        <button onClick={() => filterItem('bedsitter')}>bedsitter</button>
        <button onClick={() => filterItem('1bedroom')}>1bedroom</button>
        <button onClick={() => filterItem('2bedroom')}>2bedroom</button>
        <button onClick={() => filterItem('3bedroom')}>3bedroom</button>
        <ul className="categoryList">
        {category.map((cat) => (
        <CheckboxProton
          key={cat.id}
          cat={cat}
          changeChecked={changeChecked}
        />
      ))}
      </ul>
      </div>
      <span className="categoryTitle font-beutify">Price Range</span>
      <PriceFilter value={value} changePrice={changePrice} />
      {/* </div> */}
    </div>
  )
}
export default Category