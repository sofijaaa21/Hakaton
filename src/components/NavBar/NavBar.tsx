import {styled} from "styled-components"
import {Link, useNavigate} from "react-router-dom"
import { useState } from "react";
import "./NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {NavigationDesktop} from "./MultiLevelDropDownMenu"
import navLinksData from "./MenuItemsData.json"
export const NavBar=()=>{
    const navigate = useNavigate();
    

    //const[counter, setCounter]=useState(0);
    //const incress= ()=>{
    //    setCounter(counter+1);
    //}
    
    return(
    <nav>
        <div className="nav">
            <div className="upper">
                <div className="nav-logo" onClick={()=>{
                    
                }}>
                    <Link to={"/"}>Thriftshop</Link>
                </div>

                <div className="nav-search">
                    <input type="text" className="search-bar" placeholder="Pretrazi prema nazivu proizvoda"/>
                    <svg xmlns="http://www.w3.org/2000/svg" className="lupa" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
    <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
    </svg> 
                </div>    


                <div className="nav-login-cart">
                    <div className="prijava"><Link to={"/login"}>Login</Link></div>
                    <Link to={"/cart"}><img width="32" height="32" src="https://img.icons8.com/material-outlined/24/shopping-cart--v1.png" alt="shopping-cart--v1"/></Link>
                    <div className="nav-cart-count">0</div>
                </div>
            </div>
            <div className="lower">
                <ul className="nav-menu">
        

                    <NavigationDesktop navLinksData={navLinksData} />
                    {/*<li onClick={()=>{}}><Link style={{textDecoration: 'none'}} to={"/"}>Prodavnica</Link> </li>
                    <li onClick={()=>{}}><Link style={{textDecoration: 'none'}} to={"/"}>O nama</Link></li>
                    <li onClick={()=>{}}><Link style={{textDecoration: 'none'}} to={"/"}>Kontakt</Link></li>
            <li onClick={()=>{}}><Link style={{textDecoration: 'none'}} to={"/"}>Informacije</Link></li>*/}
                </ul>
            </div>
            
        </div>
        <div className="black_part">
            
        </div>
    </nav>
    
    );
}

export const PageContainer= styled.div`
    

`;

const Logo = styled.div`
    margin:30px;
    cursor:pointer;
`;
const Navbar= styled.div`
    width:100%;
`;
