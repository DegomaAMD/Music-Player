import React, { useState } from 'react';
import '../App.css';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='main-content'>
      <Container className='login-container'>
        <div className='music-bg'></div>
        <div className='login-input-form'>
          <h2>Login</h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>
                Email
              </Form.Label>
              <div className='login-input-container'>
              <Form.Control type='email'  placeholder="email@example.com" />
              <FontAwesomeIcon icon={faAt} className='input-icon'/>
              </div>

            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                Password
              </Form.Label>
              <div className='login-input-container'>
              <Form.Control maxLength={20} type={showPassword ? 'text' : 'password'} placeholder="Password" />
              <FontAwesomeIcon icon={faLock} className='input-icon'/>
              <div onClick={() => setShowPassword(!showPassword)} className='show-hide-icon'>
                {showPassword ? (<FontAwesomeIcon icon={faEyeSlash} />) : (<FontAwesomeIcon icon={faEye}/>)}
              </div>
              </div>
            </Form.Group>
            <div className='login-buttons'>
            <Button className='button-1'>Login</Button> 
            <Form.Check type='checkbox' label={'Remember me'} className='input-check'></Form.Check>
            </div>
            
          </Form>
          
        </div>
      

      </Container>
    </div>
  )
}

export default Login