import React from 'react';
import ItemProps from '../ItemProps';
import "./BreadCrum.css"
interface BreadCrumProps {
  product?: ItemProps;
}

const BreadCrum: React.FC< BreadCrumProps> = ({ product }) => {

 
  let tekst
  if(product) tekst= `HOME > SHOP > ${product.category}/${product.group} > ${product.title}`;
  return (
    <div className='breadcrum'>
      {tekst}
    </div>
  );
};

export default BreadCrum;