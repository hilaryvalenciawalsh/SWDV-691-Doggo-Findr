import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import DFlogo from "../assets/foster.jpg"
import logo from "../assets/justname.png"

const Home = () => {
  return (
    <HomeContainer>
      <div className="home-img">
        <img src={ DFlogo } alt='logo' style={ { backgroundColor: "white)", } } />
      </div>
      <div className="home-content">
        <img alt='logo' src= {logo}/>
        <h5 class="card-title"> About Fostering</h5>
        <p class="card-text"> WHAT IS FOSTERING</p>
        <p>When you foster, you agree to take a homeless dog into your home and give him or her love, care and attention, either for a predetermined period of time or until the dog is adopted. </p>
        <p>HOW DOES IT WORK?</p>
        <p>We send you new doggos that need a temporary home. Once that doggo is adopted, they will leave your care and into the care of the new owners care!</p>
        <p> HOW CAN I APPLY TO BE A FOSTER PARENT?</p>
        <p> Click on the contact us page! CLick below to see our doggos!</p>

        <Link to="/dogs"><button className="btn-find">More</button></Link>
      </div>
    </HomeContainer>
  );
};

export default Home;



const HomeContainer = styled.div`
 min-height:100vh;
 display:flex;

  background: white;

 div{
   margin:0 2rem;
   padding:3rem;

 }
 
  .home-content{
    align-content:center;
    width:35%;
      h1{
        text-align:left !important;
        margin:2rem 0;
        span{
          font-size:2.4rem;
          color: #11be8b;
          margin:0 .6rem;
          
        }
       
      }

     
      .btn-find{
        border-radius: 25px;
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
  }




   
 }
 .home-img {
  width:55%;
  margin:2rem;
  padding:2rem;
  align-items:left;
   text-align:center !important;
  

    img{
      width:80%;
      box-shadow: 2px 1px 51px 10px rgba(255,255,255,0.95);
    }

 }
 @media only screen and (max-width: 768px){
  display:block;
  div{
   padding:3rem 1rem;

 }
  .home-content{
    width:80%;
    .btn-find{
      border-radius: 25px;
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
  }
  .home-img{
    width:90%;
    text-align:center;
    margin:0 auto;
      
    img{
      height:80%;
      width:90%;
    }
  }      
}
  

`
