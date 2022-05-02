import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <div className='register-form'>
             <h2 style={{textAlign: 'center'}}>Please Register</h2>
             <form>
             <input type="text" name="name" id="" placeholder='YourName'/>
                <input type="email" name="email" id="" placeholder='Your Email Address' required/>
                <input type="password" name="password" id="" placeholder='Password' required/> 
                <input
                 className='btn btn-primary w-50 mx-auto mt-2' type="submit" value="Register" />
             </form>
        </div>
    );
};

export default Register;