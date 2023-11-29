import React from 'react'
import { useParams } from 'react-router'
import Item from '../Item/item';
import { BreadCrum } from './BreadCrum';

interface ItemProps {
  idd: number;
  image: string;
  title: string;
  category: string;
  brand: string;
  description: string;
  size: string;
}
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
export const ProductDisplay = () => {
  const {productId}= useParams<string>();
  console.log(typeof(productId))
  


  const product= all_products.find((e)=>{return e.id == Number(productId)});


  console.log(product);
  return (
    
    <div>
      {product && (
        <Item
          key={product.id}
          image={product.image}
          title={product.title}
          brand={product.brand}
          price={product.price}
          description={product.description}
          size={product.size}
          idd={product.id}
          category={product.category}
        />
      )}
    </div>
  );
  }
    
export default ProductDisplay;