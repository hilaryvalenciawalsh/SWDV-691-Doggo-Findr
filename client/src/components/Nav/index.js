import React from 'react';
import { Link } from 'react-router-dom';

import styled from "styled-components";
import BurgerMenu from './BurgerMenu';

function Nav() {

  return (
    <NavbarEl>
      <div>
        <Link to='/' className='brand-logo'>
          
          <p >
             DoggoFindr
      </p></Link>
        
      </div>
      <BurgerMenu />

      
    </NavbarEl>
  );
}

export default Nav;

const NavbarEl = styled.nav`
  
    background-color: white;
    position: relative;
    height: 120px;
    padding:1% 2%;
    z-index:10;
    display:flex;
    justify-content:space-between;
   
    .brand-logo{
      font-family: 'Cerebri Sans', 'Helvetica', 'Arial', 'sans-serif';   
      font-size:2.7rem !important; 
      color:black;
      font-weight:1000;
      
  
    

    p {     
     
      font-size:2.7rem !important; 
      color:black;
      font-weight:20;
    } 
   
   
 
 

`