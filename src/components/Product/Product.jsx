import React from 'react'
import "./Product.css";

const Product = ({i,link,title}) => {
  console.log(i)
  return (
    <div className='p'>
      <div className="p-top">{title}</div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={i} alt="" className="p-img" />
      </a>
    </div>
  )
}

export default Product