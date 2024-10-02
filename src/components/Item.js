import React from "react";

function Item({ name, category }) {

  
  return (
    <li className=''>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to cart</button>
    </li>
  );
}

export default Item;
