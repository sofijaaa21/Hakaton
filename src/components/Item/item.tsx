import React from 'react'
import "./item.css"
import { Link } from 'react-router-dom';

interface ItemProps {
    id: number;
    image: string;
    title: string;
    category: string;
    brand: string;
    price: number;
    description: string;
    size: string;
}

export const Item: React.FC<ItemProps>= (props)  => {

    
  return (
    <div className="item">
        <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
        <div className="name-brend"><h2 className='name'>{props.title}</h2>- <h3 className='brend'>{props.brand} </h3></div>
        <div className='price'><p>{props.category}</p></div>
        <p className='size'>Dostupna Veličina: {props.size}</p>
    </div>
  )
}

export default Item;