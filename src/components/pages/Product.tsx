import React, { useState } from 'react'
import { useParams } from 'react-router'
import { ProductDisplay } from '../ProductDisplay/ProductDisplay';
import ItemProps from '../ItemProps';


let all_products=[
  {
    id:1,
      image: "https://picsum.photos/350",
      title: "Majica",
      category: "Muškarci",
      brand: "mudja",
      price: 13,
      description: "afshoiufash",
      size: "L"
  },
  {
    id:2,
      image: "https://picsum.photos/350",
      title: "Majica",
      category: "Muškarci",
      brand: "sda",
      price: 1,
      description: "fffsaf",
      size: "M"
  },
  {
    id:3,
      image: "https://picsum.photos/350",
      title: "Majica",
      category: "Deca",
      brand: "serna",
      price: 132,
      description: "faaaaaaa",
      size: "XL"
  },
  {
    id:4,
    image: "https://picsum.photos/350",
    title: "Majica",
    category: "Žene",
    brand: "serna",
    price: 132,
    description: "faaaaaaa",
    size: "XL"
},{
  id:5,
  image: "https://picsum.photos/350",
  title: "Majica",
  category: "Muškarci",
  brand: "serna",
  price: 132,
  description: "faaaaaaa",
  size: "XL"
} ,{
id:6,
image: "https://picsum.photos/350",
title: "Majica",
category: "Deca",
brand: "serna",
price: 132,
description: "faaaaaaa",
size: "XL"
},{
id:7,
image: "https://picsum.photos/350",
title: "Šorc",
category: "Žene",
brand: "dasdas",
price: 132,
description: "faaaaaaa",
size: "XL"
},{
id:8,
image: "https://picsum.photos/350",
title: "Šorc",
category: "Muškarci",
brand: "ffasfasgadsvsdvsdvsadvsda",
price: 132,
description: "faaaaaaa",
size: "XL"
},{
id:9,
image: "https://picsum.photos/350",
title: "Šorc",
category: "Muškarci",
brand: "dasdvsdvsdvsdvsdavsdas",
price: 132,
description: "faaaaaaa",
size: "XL"
}
]



export const Product = () => {
    const {productId} =useParams();
    const product= all_products.find((e)=> e.id.toString() === productId);
    console.log(typeof(product))
    ////<ProductDisplay product={product} />
  return (
  
<div>
    2
    </div>
  )
}

export default Product;