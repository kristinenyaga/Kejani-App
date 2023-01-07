import React from 'react'
import './category.css'
function Category({categories,setSelectedCategory,selectedCategory}) {
  return (
    <div className="category">
      <div className="categoryItem">
       
      </div>
      <div className="categoryItem">
        <span className="categoryTitle font-beutify">CHOOSE CATEGORY</span>
        <ul className="categoryList">
          {categories.map((category)=>(
            <li className='categoryListItem'key={category}
            onClick={() => setSelectedCategory(category)}>{category}</li>
          ))}
      </ul>
      </div>

    
        
      {/* </div> */}

    </div>
  )
}

export default Category