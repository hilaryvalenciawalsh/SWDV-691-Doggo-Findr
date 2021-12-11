import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Dog = (dog) => {


  const { image, name, _id } = dog;

  return (
    <>
      <ImageEL>
        <Link to={`/dogs/${_id}`}>
          <img src={`${image}`} alt="pet img" style={{ width: "100%" }} />
        </Link>
        <h4>{name}</h4>
      </ImageEL>
    </>
  );
};
export default Dog;

const ImageEL = styled.article`
  img {
    box-shadow: 2px 1px 17px 3px rgba(128, 144, 170, 0.5);
    transition: ease-in-out 0.3s;
  }

`;
