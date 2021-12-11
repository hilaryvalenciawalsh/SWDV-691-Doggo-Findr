import React from 'react'
import styled from 'styled-components';
import Auth from "../../utils/auth";
import { Link } from 'react-router-dom';
<link href='https://fonts.googleapis.com/css?family=Allerta Stencil' rel='stylesheet'></link>
const logout = event => {
    event.preventDefault();
    Auth.logout();
};

const Sidebar = ({ open, onClick }) => {
    return (
       
                <>
                    <Link to='/' className='text-link'>
                        <li>Find a Friend</li>
                    </Link>

                    <Link to='/dogs' className='text-link'>
                        <li> Dogs</li>
                    </Link>

                    <Link to='/foster' className='text-link'>
                        <li>Foster</li>
                    </Link>

                    <Link to='/contact' className='text-link'>
                        <li>Contact</li>
                    </Link>

                </>
            )}

            {Auth.loggedIn() ? (
                <>
                    <Link to='/login' className='text-link donate' onClick={logout}>
                        <li>Logout</li>
                    </Link>
                </>
            ) : (
                <>
                    <Link to='/login' className='text-link donate'>
                        <li>Login</li>
                    </Link>
                </>
            )}
        </UlContainer>

export default Sidebar

const UlContainer = styled.ul`
    display:flex;
    flex-flow:row nowrap;

   .text-link{
        color:black;
        font-family: 'Allerta Stencil'
    }


    li {
      list-style-type: none;
      font-weight: 600;
      padding:1rem 1.5rem;
    }
    

  @media only screen and (max-width: 768px) {
   
      flex-flow:column nowrap;
      background:white;
      position:fixed;
      border:none;
      top:0;
      right:0;
      height:100vh;
      width:300px;
      padding:4rem 2rem;
      transform:${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
      transition: transform 0.3s ease-in-out;

    li {
      padding:1rem;
      margin:.2rem;
    }
  }
`
