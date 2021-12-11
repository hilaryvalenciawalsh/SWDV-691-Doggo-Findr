import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Redirect } from 'react-router-dom';
import {
    QUERY_USERS
} from "../utils/queries";
import { UPDATE_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Form } from 'react-bootstrap';


import styled from 'styled-components';
 
const ApplicationForm = () => {
    const [formState, setFormState] = useState("");
    const [updateUser] = useMutation(UPDATE_USER);
    const { data: userData } = useQuery(QUERY_USERS);

    if (!Auth.loggedIn()) {
        return <Redirect to="./login" />
    };

    const emailUser = Auth.getProfile().data.email;
   
    const userDataID = userData?.users || [];
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            userDataID.map((user) => {
                if (user.email === emailUser) {
                    formState._id = user._id;
                }
            })

            formState.phone = parseInt(formState.phone);
            formState.noOfKids = parseInt(formState.noOfKids);
            formState.otherDogs = parseInt(formState.otherDogs);
            const { data } = await updateUser({
                variables: { ...formState }
            });

            if (data) {
                alert("Thank you. If you are a good fit we will reach out to you");
                window.location.assign('/');
            }
        } catch (e) {
            console.error(e);
        }
    };

    return (

        <main>
            <div >
                <div >
                    <div >
                        <HomeContainer>
                            <div className="home-img">
                               

                                <Form onSubmit={ handleFormSubmit }>
                                    <Form.Group controlId="formBasicFirstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" name='firstName' className='form-input' id='firstName' value={ formState.firstName } placeholder="Enter First Name" onChange={ handleChange } />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicLastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" name='lastName' className='form-input' id='lastName' value={ formState.lastName } placeholder="Enter Last Name" onChange={ handleChange } />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicAddress">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text" name='address' className='form-input' id='address' value={ formState.address } placeholder="Enter Address" onChange={ handleChange } />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPhone">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="number" name='phone' className='form-input' id='phone' value={ formState.phone } placeholder="Enter Phone Number" onChange={ handleChange } />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCity">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control type="text" name='city' className='form-input' id='city' value={ formState.city } placeholder="Enter City" onChange={ handleChange } />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicState">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control type="text" name='state' className='form-input' id='state' value={ formState.state } placeholder="Enter State" onChange={ handleChange } />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicZip">
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control type="text" name='zip' className='form-input' id='zip' value={ formState.zip } placeholder="Enter Zip" onChange={ handleChange } />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicOtherDogs">
                                        <Form.Label>Do you have dogs?</Form.Label>
                                        <Form.Control type="number" name='otherDogs' className='form-input' id='otherDogs' value={ formState.otherDogs } placeholder="Number of dogs" onChange={ handleChange } />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicnoOfKids">
                                        <Form.Label>Do you have any kids?</Form.Label>
                                        <Form.Control type="number" name='noOfKids' className='form-input' id='noOfKids' value={ formState.noOfKids } placeholder="Number of Kids" onChange={ handleChange } />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicHouseOrApartment">
                                        <Form.Label>Do you have a house or an Apartment</Form.Label>
                                        <Form.Control type="text" name='houseOrApartment' className='form-input' id='houseOrApartment' value={ formState.houseOrApartment } placeholder="House or Apartment?" onChange={ handleChange } />
                                    </Form.Group>
                                    <button className="btn-find" type="submit">Submit</button>

                                </Form>
                            </div>
                        </HomeContainer>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ApplicationForm;

const HomeContainer = styled.div`
 min-height:100vh;
 display:flex;
 justify-content:center;
 background: white;

 
 div{
   margin:0 2rem;
   padding:3rem;
 }



.home-img {
    width:35%;
    height: 10%;
    margin:1rem;
    padding:0.2rem;
    border: 2px solid grey;
    align-items:left;
    text-align:center !important;
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


`