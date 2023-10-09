import React from 'react'
import Banner from "../../Assets/banner.png"

function Login() {
  return (
    <div className='bg-[var(--secondary-text)] dark:bg-primary-text w-[70%] flex flex-col md:flex-row justify-center items-center md:w-[80%] '>
      
        <div className='w-full h-[60%] sm:h-[50%] md:h-full'>
            <img className='h-[80%] sm:h-full' src={Banner} alt='banner' />
        </div>
        
        <div className='border w-full h-64'>
            <form action="">
            <input type="button" value="Sign In" />
            <input type="button" value="Sign In" />
            <p><input type="button" value="Sign In" /></p>
            <input type="button" value="Sign In" />
            </form>
        </div>
      
    </div>
  )
}

export default Login
