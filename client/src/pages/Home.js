import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import DFLogo from "../assets/doggofindrlogo.png"

const Home = () => {
  return (
    <HomeContainer>
      <div className="home-content">
  
        <h1>Looking for a Friend?<span> Let's Adopt</span></h1>
        <Link to="/dogs">
          <button className="btn-find">Find a Friend	</button>
        </Link>
      </div>


  
 <div className="home-img">   <img src={ DFLogo } alt="logo" /></div>
     
      
    </HomeContainer>
  ); 
};

export default Home;

const HomeContainer = styled.div`
min-height:100vh;
display:flex;

div{
  margin:0 3rem;
  padding:0 3rem;
 }
 
.home-content{
  align-content:center;
  width:40%;
}

h1{
  text-align:left !important;
  margin:2rem 0;
}

span{
  font-size:2.4rem;
  color: #e51c23;
}




.btn-find{
  border-radius: 25px;
  align-content: center;
  margin: 0 auto;
  display: block;
  background-color: #8EF2EF;
  border: 1px solid #8EF2EF;
  color: black;
  font-size: 16px;
  line-height: 22px;
  padding: 16px 24px;
  text-decoration: none;
  transition: all 200ms ease;
}


p{
  font-family: Cerebri Sans, Helvetica, Arial, sans-serif;
  font-size:1.1rem;
}



.home-img {
  width:100%;
  margin:2rem;
  padding: 2rem;
  align-items:center;
  text-align:center !important;
}

img{
  width:60%;
  
}


@media only screen and (max-width: 1080px){

  .home-content {
    .btn-find{
      padding:.6rem 3rem !important; 
    }
  }

  .home-img {
    margin:2rem 0;
    padding:2rem 0;
  }
  
  img{
      height:70%;
      width:90%;
  }   
}
      
@media only screen and (max-width: 880px){

  .btn-find{
    padding:.6rem 2rem !important;
  }
}

@media only screen and (max-width: 768px){
  display:block;
  
  div{
   padding:3rem 1rem;
  }
  
  .home-content{
    width:90%;
  }

  .btn-find{
    font-family: Cerebri Sans, Helvetica, Arial, sans-serif;
    padding:.6rem 5rem !important;
    margin:2.6rem .3rem !important;
  }

  .home-img{
    width:60%;
    text-align:center;
    margin:0 auto;    
  }      
}

@media only screen and (max-width: 400px){
  display:block;

  .home-content{
    width:92%;
  }

  .btn-find{
    font-family: Cerebri Sans, Helvetica, Arial, sans-serif;
    padding:.6rem 2.4rem !important;
    margin:2.6rem .3rem !important;
  }
  
  .home-img{
    width:60%;
    text-align:center;
    margin:0 auto;    
  }      
}
`
