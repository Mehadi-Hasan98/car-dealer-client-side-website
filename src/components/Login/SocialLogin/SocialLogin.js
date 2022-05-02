import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {FcGoogle} from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    let errorElement;

    if(loading){
        return <Loading></Loading>
    }

if (error) {
    
    errorElement = <p className='text-danger'>Error: {error?.message}</p>
      
  }

  if(user){
    navigate('/home');
  }
    return (
        <div>
        <div className='d-flex align-items-center'>
            <div style={{height: '1px'}} className='bg-primary w-50'></div>
            <p className='mt-2 px-2'>Or</p>
            <div style={{height: '1px'}} className='bg-primary w-50'></div>
        </div>
        {errorElement}
        <div>
            <button 
            onClick={() => signInWithGoogle()}
            className='btn btn-dark w-50 d-block my-2 mx-auto'>
            <FcGoogle/><span className='ps-4'>Google Sign In</span>
            </button>
        </div>
   </div>
    );
};

export default SocialLogin;