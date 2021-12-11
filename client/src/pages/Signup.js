import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Form } from 'react-bootstrap';

import styled from 'styled-components';
const Signup = () => {

    const [formState, setFormState] = useState({ email: '', password: '', userName: '' });
    const [addUser, { error }] = useMutation(ADD_USER);
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

            const { data } = await addUser({
                variables: { ...formState }
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
        // RegisterUser(formState).then(res => {
        //     alert("Registered")
        //     console.log(res)
        // }).catch(err => {
        //     alert("Err Registering")
        //     console.log(err)
        // })
    };

    return (
        <main>
            <div >
                <div >

                    <div >
                        <HomeContainer>


                            <div className="home-img">


                                <Form onSubmit={handleFormSubmit}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>UserName</Form.Label>
                                        <Form.Control type="text" autoComplete='username' name='userName' className='form-input' id='username' value={formState.username} placeholder="Enter username" onChange={handleChange} />

                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" autoComplete='email' name='email' className='form-input' id='email' value={formState.email} placeholder="Enter email" onChange={handleChange} />

                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name='password' autoComplete='new-password' className='form-input' id='password' value={formState.password} placeholder="Password" onChange={handleChange} />
                                    </Form.Group>
                                    <button className="btn-find" type="submit">Submit</button>

                                </Form>
                            </div>
                        </HomeContainer>

                        {error && <div>Sign up failed</div>}


                    </div>
                </div>
            </div>
        </main>
    );
};

export default Signup;


const HomeContainer = styled.div`
min-height:100vh;
display:flex;
justify-content:center;
background: white;

.home-img {
  width:33%;
  height: 10%;
  margin:4rem;
  padding:1rem 4rem;
  align-items:left;
  text-align:left !important;
  background-color:white !important;
  box-shadow: 2px 1px 89px 0px rgba(56,101,167,.3);
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


.icon{
  color:#e51c23;
  font-size:3rem;
  transform:rotate(-20deg);
}

@media only screen and (max-width: 1168px) {
  .home-img{ 
  width:50%;
  }
}

@media only screen and (max-width: 768px) {
  .home-img{ 
    width:70%;
    margin:4rem 3rem;
    padding:1rem 2rem;
  }
}

@media only screen and (max-width: 568px) {
  .home-img{ 
  width:100%;
  }
}
`
