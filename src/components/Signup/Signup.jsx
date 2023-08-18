import React, {useRef, useState} from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../Context/AuthContext';

const Signup = () => {

    // Creating the reafs
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Navigate Hook
    const navigate = useNavigate();

    // console.log(curentUser?)

    // handleSubmit function
    async function handleSubmit(e){
        // preventing form from refreshing 
        e.preventDefault()

        // Doing validation checks
        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match');
        }

         // calling our signup function and passing in the email and password
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value); 
            
            // Navigate to dashboard after  signup
            navigate("/dashboard");
        } catch (error) {
            setError("Failed to create an account")
            
        }

        setLoading(false)

        
       
        
    }

    // console.log(curentUser)

  return (
    <>

            <div className="signup">
            <div className='signupbody'>
                <h2 className='text-center mb-4'>Sign Up</h2>
                
                {error &&   <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={passwordRef} required/>
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type='password' ref={passwordConfirmRef} required/>
                    </Form.Group>
                    <div className='signupbtncontainer'>
                    <Button disabled={loading} className='signupbtn' type='submit'>Sign Up</Button>
                    </div>
                </Form>

        <div className='w-100 text-center mt-2'>
            Already have an account? <Link className='signuptext' to="/">Log In</Link>
            </div>
        </div>
        </div>
        
      
    </>
  )
}

export default Signup
