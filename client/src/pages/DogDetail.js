import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import { QUERY_DOGS } from "../utils/queries";
import { UPDATE_DOGS } from "../utils/actions";

import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/react-hooks";

const DogDetail = () => {
  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();
  const { id } = useParams();
  const [currentDog, setCurrentDog] = useState({});
  const { loading, data } = useQuery(QUERY_DOGS);
  const { dogs } = state;

  useEffect(() => {
    if (dogs.length) {
      setCurrentDog(dogs.find((dog) => dog._id === id));
    } else if (data) {
      dispatch({
        type: UPDATE_DOGS,
        dogs: data.dogs,
      });
    }
  }, [dogs, data, loading, dispatch, id]);

  return (
    <DetailDogEL id="dog">
      <section className="container">
        <img
          className="mb-20"
          src={ `/images/${currentDog.imgUrl}` }
          width="100%"
          alt=""
        />
      </section>

      <section className="container mt-20">
        <h1>{ currentDog.name }  </h1>

        <div>
          <p>Size: <span >{ currentDog.size }</span> </p>
          <p>Weight: <span >{ currentDog.weight }</span></p>
          <p> Height: <span >{ currentDog.height }</span> </p>
          <p>Born: <span >{ currentDog.yearOfBirth }</span></p>

  
          <p>
            { currentDog.story }
          </p>
        </div>

        <div className="buttons">

          <Link to="/application-form">
            <button className="btn-adopt"> Adopt Me </button>
          </Link>

        </div>
      </section>
    </DetailDogEL>
  );
};

const DetailDogEL = styled.main`
background-color:white;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
padding-bottom:3rem;

section{
  width:40%; 
  margin-top:3rem;
}
  
h1{
  font-size:1.4rem;
  align-content:left;

}

img{
  margin-top:3rem;
  box-shadow: 2px 1px 57px -3px rgba(128,144,170,0.75);
}

.buttons{
  align-content:center;
  text-align:center;
  margin-top:2rem;
}

.buttons a button{
  font-family: Cerebri Sans, Helvetica, Arial, sans-serif;
  padding:.6rem 3rem !important;
  margin:.6rem .3rem !important;
  text-decoration: none !important;
  border-radius:none;
  transition:ease-in-out .2s;
  cursor:pointer;
  width:48%;
}



.btn-adopt{
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
  align-content:center;
}

span{
  color:gray;
  margin-left:.4rem;
}

p{
  line-height:1.9rem;
  font-weight: 1rem;
}

@media only screen and (max-width: 876px) {
 
  section .buttons a button{
    width:80%;    
  }
}

@media only screen and (max-width: 576px) {
  
  display:block;
  
  section{
    width:70%;
    margin-top:1rem;
  }

  section .buttons a button{
    padding:.6rem 4rem !important;
    width:80%;    
  }
}

@media only screen and (max-width: 476px) {
  
  section{
    width:80%;
  }

  section .buttons a button{
    width:90%;
  }  
}

@media only screen and (max-width: 376px) {
  
  section{
    width:90%;
  }

  section .buttons a button{
    padding:.6rem 4rem !important;
    width:100%;
  }
}
`

export default DogDetail;
