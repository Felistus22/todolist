import React from 'react'
import Banner from "../../Assets/banner.png"
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='bg-[var(--secondary-text)] dark:bg-primary-text w-[55%] flex flex-col md:flex-row justify-center items-center md:w-[70%] rounded-2xl'>
      
        <div className='w-full h-[60%] sm:h-[50%] md:h-full'>
            <img className='h-[80%] sm:h-full' src={Banner} alt='banner' />
        </div>
        
        <div className='w-full h-84'>
            <form action="" className='m-2 p-2 flex flex-col gap-2 justify-center items-center'>
                <h1>Sign Up</h1>
                <div className='outline-none'>
                <input className='rounded outline-none p-1' type="text" placeholder='username' />
            </div>
            <div className='outline-none'>
                <input className='rounded outline-none p-1' type="text" placeholder='full name' />
            </div>
            <div>
                <input className='rounded outline-none p-1' type="email" placeholder='email' />
            </div>
            <div>
                <input className='rounded outline-none p-1' type="password" placeholder='password' />
            </div>
            <div>
                <input className='rounded outline-none p-1' type="password" placeholder='confirm password' />
            </div>
            <div className='w-[50%] flex justify-center'>
                <button className='p-2 bg-dark-gradient dark:bg-light-gradient rounded-md w-[80%]' type="button"><Link>Register</Link></button>
            </div>
            <span className=''>Already have an account? <Link to='/login'>Login</Link></span>
            </form>
        </div>
      
    </div>
  )
}

export default SignUp
