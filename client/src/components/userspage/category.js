import React from 'react'
import './category.css'
import PriceFilter from './pricefilter'
function Category({categories,setSelectedCategory,selectedCategory,value, changePrice}) {
  return (
    <div className="category">
      <div className="categoryItem">
        <span className="categoryTitle font-beutify">Category</span>
        <ul className="categoryList">
          {categories.map((category)=>(
            <li className='categoryListItem'key={category}
            onClick={() => setSelectedCategory(category)}>{category}</li>
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