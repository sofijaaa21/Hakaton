import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {Item} from "../../Item/item"
import "./Shop.css"

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

interface CategoryProps{
    title: string;
    submenu: any; 
    id: number; 
}
let products=[
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


const findTitleInMenu = (menuItemss:CategoryProps[], titleToCheck: string | undefined):string | null => {
    const  menuItems=[];
    menuItems.push(menuItemss);
    for (const menuItema of menuItems) {
        for(const menuItem of menuItema){
      let current_title;
      if(titleToCheck && titleToCheck.charAt(0)=="M"){
        current_title="Muškarci-"+menuItem.title;
      }
      if(titleToCheck && titleToCheck.charAt(0)=="Ž"){
        current_title="Žene-"+menuItem.title;
      }
      if(titleToCheck && titleToCheck.charAt(0)=="D"){
        current_title="Deca-"+menuItem.title;
      }
      if(titleToCheck && titleToCheck.charAt(0)=="O"){
        current_title="Oprema-"+menuItem.title;
      }
      if (current_title === titleToCheck) {
        return menuItem.title; // Return the matching title
      }
      if (menuItem.submenu) {
        // Recursive call for children and grandchildren
        const foundTitle = findTitleInMenu(menuItem.submenu, titleToCheck);
        if (foundTitle) {
          return foundTitle; // Return the matching title from the recursion
        }
      }
        }
    }
    return null; 
  };




  export const Shop: React.FC<{ categories:CategoryProps[] }> = (props) => {
    const { categories } = props;
    const { categoryName } = useParams();
    const myDivRef = document.querySelector('.ItemField');
    let Elementcount;
  useEffect(() => {
    if (myDivRef) {Elementcount = myDivRef.children.length;
    

  }});
    
    const filteredCategory = categories.filter((el: CategoryProps) =>{
      let current_title;
      if(categoryName && categoryName.charAt(0)=="M"){
        current_title="Muškarci-"+el.title;
      }
      if(categoryName && categoryName.charAt(0)=="Ž"){
        current_title="Žene-"+el.title;
      }
      if(categoryName && categoryName.charAt(0)=="D"){
        current_title="Deca-"+el.title;
      }
      if(categoryName && categoryName.charAt(0)=="O"){
        current_title="Oprema-"+el.title;
      }
      
      if(current_title === categoryName) return el.title;
      else return null;

     ;
    })
  console.log(filteredCategory)
    
    const selectedTitle = findTitleInMenu(categories, categoryName); 
  
    
    

    const SelectedProducts = products.filter((el: ItemProps) => {
      console.log(el.category.charAt(0))
        return (el.title===selectedTitle &&categoryName&& el.category.charAt(0) ===categoryName.charAt(0));
      });
    return (
      <div className='shopPage'>
        <h2>Shop Page - {selectedTitle}  </h2> <p>Broj proizvoda: {Elementcount}</p>
        
        <div className="ItemField">
          
          {  SelectedProducts.map((item) => (
            
              <Item
              key={item.id}
              image={item.image}
              title={item.title}
              brand={item.brand}
              price={item.price}
              description={item.description}
              size={item.size} id={0} category={''}              />
            ))}
          
        </div>

      </div>
    );
  };
export default Shop;