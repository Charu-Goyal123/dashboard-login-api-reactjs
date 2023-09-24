import React from 'react'
import Google from '../assets/googlesvg.png';
//import Dashboard from './Dashboard';
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  function signInButtonHandler()
  {
         navigate("/dashboard")
  }

  return (
   <div className='flex items-center justify-center min-h-screen bg-gray-100'>
    <div className='relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0'>
      <div className='flex flex-col justify-center p-8 md:p-14'>
      <span className='mb-3 text-4xl font-bold'>Welcome!</span>
      <span className='font-light text-gray-400 mb-8'>Please enter your details..</span>
      <div className='py-4'>
        <span className='mb-2 text-md'>Email</span>
        <input type='text' className='w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500' name='email' id='email'></input>
      </div>
      <div className='py-4'>
        <span className='mb-2 text-md'>Password</span>
        <input type='password' className='w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500' name='pass' id='pass'></input>
      </div>
      <div className='flex justify-between w-full py-4'>
      <div className='mr-24'>
        <input type='checkbox' name='ch' id='ch' className='mr-2'></input>
        <span className='text-md'>Remember for 30 days.</span>
      </div>
      <span className='font-bold text-md'>Forgot Password</span>
      </div>
     <button onClick={signInButtonHandler} className='w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300'>
      Sign in 
        </button>
      <button className='w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white'>
        <img src={Google} className='w-6 h-6 inline mr-2' alt='img'></img>
      Sign in with Google
      </button>
      <div className='text-center text-gray-400'>Don't have an account?
      <span className='font-bold text-black'>Sign up for free</span></div>
      </div>
   
    </div>
   </div>
  )
}

export default Login;