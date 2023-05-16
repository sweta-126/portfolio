import React from 'react'
import "./ProductList.css";
import Product from '../Product/Product';
import { products } from '../../Data';

const ProductList = () => {
  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 className="pl-title">My Projects</h1>
        <p className="pl-desc">
        I can develop diverse web applications, ranging from simple static websites to complex web applications.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item)=>(
          <Product  key={item.id} i={item.img} link={item.link} title={item.title}/>
        ))}
      </div>
    </div>
  )
}

export default ProductList