import React from 'react'
import { useParams } from 'react-router'
import Item from '../Item/item';
import BreadCrum from "./BreadCrum";
import Data from "../pages/Shop/Data"
import ItemProps from '../ItemProps';

import "./ProductDisplay.css"

export const ProductDisplay = () => {
  const {productId}= useParams<string>();
  console.log(typeof(productId))
  


  const product= Data.find((e)=>{return e.idd == Number(productId)});


  console.log(product);
  return (
    
    <section className="ProductPage">
      <div className='Up'>
      <BreadCrum product={product}/>
    </div>
    <div className='Down'>
      <div className='LeftSide'>
        {product && (
          <img src={product.image} alt={product.title+` Image`} />

        )}
      </div>
      <div className="RightSide">
    {product && (
      <div> 
        <h1>{product.title}</h1>
        <h3>{product.brand}</h3>
        <div>
          <h4>{product.category} - {product.group}</h4>
        </div>
        <div className='size'><span> Dostupna Veličina:</span><h5> {product.size}</h5></div>
        
        <p>{product.description}</p>
        <div className='buy-button'><button>Dodaj u Korpu</button></div>
      </div>
    
    )}
    </div>
</div>
    </section>
  );
  }
    
export default ProductDisplay;