import React, { ReactNode, useState } from 'react'
import "./DropDownMenu.css"
import { Link } from 'react-router-dom';



export const NavigationDesktop = (props: { navLinksData: any; }) => {
  const{navLinksData}=props;
  const [showSubMenu,setShowSubMenu]= useState<Array<boolean>>([]);

  const subMenuOnMouseEnterHandler=(id: number 
)=>{
    setShowSubMenu((prev)=>{
      let arr= [...prev];
      arr[id]=true;
      return arr;
    })
  }
  const subMenuOnMouseLeaveHandler=(id: number )=>{
    setShowSubMenu((prev)=>{
      let arr= [...prev];
      arr[id]=false;
      return arr;
    })
  }

  return (
    <ul className="main-nav">
      {navLinksData.map((el: {
        title: string; submenu: any; id:  number; 
}) =>{
        if(!el.submenu){
          return (<li key={el.id}>
            <a href="#" className='header-nav-link' style={{textDecoration: "none"}}>
              <span>{el.title}</span>
            </a>
          </li>);
        }


        return (
          <li onMouseEnter={()=>{
            subMenuOnMouseEnterHandler(el.id)
          }}
          onMouseLeave={()=>{
            subMenuOnMouseLeaveHandler(el.id);
          }}
          className="header-nav-options options-hover">
              <div className="header-nav-div">
                <span>{el.title}</span>
                <ul className="header-nav-ul">
                    {showSubMenu[el.id] && el.submenu.map((ele: {
        title: string; submenu: any; id: number; 
})=>{
                    if(!ele.submenu){
                      return <li key={ele.id} className='sub-menu-li'>
                        <a href="" className="sub-menu-link" style={{textDecoration: "none"}}>
                        <Link to={`/shop/${el.title}-${ele.title}`}><span>{ele.title}</span></Link>
                        </a>
                      </li>
                    }
                    return <li 
                    onMouseEnter={()=>{
                      subMenuOnMouseEnterHandler(ele.id)
                    }}
                    onMouseLeave={()=>{
                      subMenuOnMouseLeaveHandler(ele.id);
                    }}
                    className="sub-menu-options sub-menu-hover">

                    
                      <div className="sub-menu-div">
                      <Link to={`/shop/${el.title}-${ele.title}`} style={{textDecoration: "none"}}>
                      <span>{ele.title}</span></Link>
                      <span className='arrow'>{" ->"}</span>
                    </div>

                    <ul className="sub-menu-ul">
                      {showSubMenu[ele.id] &&ele.submenu.map((elem:{
        title: string; submenu: any; id:  number; 
})=>{
                      return <li
                      
                      className="grand-child-link" key={elem.id}>
                        <a href="">
                          <Link to={`/shop/${el.title}-${elem.title}`} style={{textDecoration: "none"}}><span>{elem.title}</span></Link>
                        </a>
                      </li>
                    })}
                    </ul>
                  </li>
                  })}
                  
                </ul>
              </div>
          </li>
        )
      })}
    </ul>
  );
};
