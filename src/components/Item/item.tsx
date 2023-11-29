import React from 'react'
import "./item.css"
import { Link } from 'react-router-dom';
import { group } from 'console';
import ItemProps from '../ItemProps';

export const Item: React.FC<ItemProps>= (props)  => {

    
  return (
    <div className="item">
        <Link to={`/ProductDisplay/${props.idd}`} onClick={()=>{
        }}><img src={props.image} alt="" /></Link>
        <div className="name-brend"><h2 className='name'>{props.title}</h2>- <h3 className='brend'>{props.brand} </h3>- <h3>{props.group}</h3></div>
        <div className='price'><p>{props.category}</p></div>
        <p className='size'>Dostupna Veličina: {props.size}</p>
    </div>
  )
}

export default Item;