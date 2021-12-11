import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Form } from 'react-bootstrap';
import { Link } from "react-router-dom";

import styled from 'styled-components';

const Login = (props) => {
  // alert("LOGGIN")
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: { ...formState }
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main >
      <HomeContainer>
        <div className="home-content">

          <h1>Looking for a Friend? <span> Let's Login/Signup </span></h1>

          <Link to="/dogs"><button className="btn-find">Find dog 	</button></Link>
        </div>

        <div className="home-img">


          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name='email' autoComplete='email' className='form-input' id='email' value={formState.email} placeholder="Enter email" onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name='password' autoComplete='current-password' className='form-input' id='password' value={formState.password} placeholder="Password" onChange={handleChange} />
            </Form.Group>

            <button className="btn-find" type="submit">Sign in</button>
            <Form.Text>
              <Link to="/signup"><button className="btn-signup" type="submit">Sign Up</button></Link>

            </Form.Text>
          </Form>
          {error && <div>Login failed</div>}

        </div>
      </HomeContainer>
    </main>
  );
};

export default Login;

const HomeContainer = styled.div`
min-height:100vh;
display:flex;
justify-content:space-around;
background: white
padding:3rem;
 
.home-content{
  align-content:center;
  width:45%;
}    
 
h1{
  text-align:left 
  margin:2rem 0;
  font-size:2.3rem;
}
 
span{
  font-size:2.4rem;
  color: #e51c23;
}
       

.icon{
  color:white;
  font-size:4rem;
  transform:rotate(30deg);
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

.home-img {
  width:33%;
  height: 90%;
  margin:1rem;
  padding:3rem 4rem;
  text-align:center !important;
  background-color:white !important;
  box-shadow: 2px 1px 89px 0px rgba(56,101,167,.4);
}

form{
  text-align:left !important;
}

.form-control{
  background:white;
}

.icon{
  color:#e51c23;
  font-size:2.3rem;
  transform:rotate(0deg);
}
     
.btn-signup{
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


@media only screen and (max-width: 1080px){

  .btn-find{
      padding:.6rem 3rem !important; 
  }

  .home-img {
    margin:2rem 0;
    padding:3rem 1rem;
  } 
}

@media only screen and (max-width: 880px){
  display:block;

  .home-content {
    width:70%;
    margin:3rem 13%;
  }

  .btn-find{
    padding:.6rem 2rem !important;
  }

  .home-img {
    margin:4rem 23%;
    padding:3rem 4rem;
    width:50%;
  }
}

@media only screen and (max-width: 768px){

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
    padding:3rem 1rem;
  }      
}

@media only screen and (max-width: 500px){

  display:block;

  .home-content{
    width:92%;
  }
  
  .btn-find{
    font-family:Cerebri Sans, Helvetica, Arial, sans-serif;
    padding:.6rem 2.4rem !important;
    margin:2.6rem .3rem !important;
  }

  .home-img{
    width:100%;
    text-align:center;
    margin:0 auto;
  }      
}
`
