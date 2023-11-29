import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {Item} from "../../Item/item"
import "./Shop.css"
import products from "./Data"
import ItemProps from '../../ItemProps';

interface CategoryProps{
    title: string;
    submenu: any; 
    id: number; 
}



const findgroupInMenu = (menuItemss:CategoryProps[], groupToCheck: string | undefined):string | null => {
    const  menuItems=[];
    menuItems.push(menuItemss);
    for (const menuItema of menuItems) {
        for(const menuItem of menuItema){
      let current_group;
      if(groupToCheck && groupToCheck.charAt(0)=="M"){
        current_group="Muškarci-"+menuItem.title;
      }
      if(groupToCheck && groupToCheck.charAt(0)=="Ž"){
        current_group="Žene-"+menuItem.title;
      }
      if(groupToCheck && groupToCheck.charAt(0)=="D"){
        current_group="Deca-"+menuItem.title;
      }
      if(groupToCheck && groupToCheck.charAt(0)=="O"){
        current_group="Oprema-"+menuItem.title;
      }
      if (current_group === groupToCheck) {
        return menuItem.title; // Return the matching title
      }
      if (menuItem.submenu) {
        // Recursive call for children and grandchildren
        const foundgroup = findgroupInMenu(menuItem.submenu, groupToCheck);
        if (foundgroup) {
          return foundgroup; // Return the matching title from the recursion
        }
      }
        }
    }
    return null; 
  };



  const findItemBySearch = (ProductList:ItemProps[], titleToCheck: string | undefined):string | null => {
    for (const Product of ProductList) {
        if(titleToCheck && Product.title.includes(titleToCheck)){
          return Product.title;
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
      let current_group;
      if(categoryName && categoryName.includes("Muškarci")){
        current_group="Muškarci-"+el.title;
      }
      else if(categoryName && categoryName.includes("Žene")){
        current_group="Žene-"+el.title;
      }
      else if(categoryName && categoryName.includes("Deca")){
        current_group="Deca-"+el.title;
      }
      else if(categoryName && categoryName.includes("Oprema")){
        current_group="Oprema-"+el.title;
      }else {
        current_group=el.title;
      }
      console.log(current_group);
      if(current_group === categoryName) return el.title;
      else return null;

     ;
    })
  
    
    const selectedGroup = findgroupInMenu(categories, categoryName); 
    const selectedTitleBySearch= findItemBySearch(products, categoryName)
    
    
    

    const SelectedProducts = products.filter((el: ItemProps) => {

        return (el.group===selectedGroup &&categoryName&& el.category.charAt(0) ===categoryName.charAt(0));
      });

    const SelectedProductsBySearch = products.filter((el:ItemProps)=>{
      return( selectedTitleBySearch && el.title.includes(selectedTitleBySearch));
    })


    return (
      <div className='shopPage'>
        <h2>Shop Page - {selectedGroup}  </h2> <p>Broj proizvoda: {Elementcount}</p>
        
        <div className="ItemField">
          
          {  SelectedProducts.map((item) => (
            
              <Item
              key={item.idd}
              image={item.image}
              title={item.title}
              group={item.group}
              brand={item.brand}
              description={item.description}
              size={item.size} 
              idd={item.idd}
              category={item.category}              />
            ))}
          {SelectedProductsBySearch.map((item)=>(
            <Item
            key={item.idd}
            image={item.image}
            title={item.title}
            group={item.group}
            brand={item.brand}
            description={item.description}
            size={item.size}
            idd={item.idd} 
            category={item.category}          />

          ))
}
        </div>

      </div>
    );
  };
export default Shop;