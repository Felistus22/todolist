import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'
//import Upcoming from './Upcoming'
import Today from './Today'

function MenuBar() {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    } 

  return (
    <div className='Menu dark:text-primary-light grid grid-flow-col grid-template-coll sm:grid-template-col h-full'>
        <div className='p-1 hidden sm:block justify-center items-center'>
            <h1 className='m-1 p-1 text-[var(--primary-text)] dark:text-[var(--secondary-text)] text-xl'>MENU</h1>
            <div className='p-1 m-1'>
                <input className='sm:w-32 text-primary-dark' type="search" name="" placeholder='Search' />
            </div>
            
            <div className='p-2 m-1 flex flex-col justify-center items-start'>
                <p className='font-bold text-xl' >Tasks</p>
                <span className='cursor-pointer'><Link to='/upcoming'>Upcoming</Link></span>
                <span className='cursor-pointer'><Link to='/today'>Today</Link></span>
                <span>Completed</span>
                <span>Calender</span>
                <span>Sticky Wall</span>
            </div>

            <div className='p-2 m-1 flex flex-col justify-center items-start'>
                <p className='font-bold text-xl'>Tags</p>
                <p className='grid grid-cols-2 gap-1 text-center'>
                <span className='bg-primary-text'>TAG1</span>
                <span className='bg-blue-200'>TAG2</span>
                <button type="button">Add Tag</button>
                </p>
                
            </div>

            <div className='p-1 m-1'>
                <button type="button">Settings</button>
            </div>
        </div>

        {/*humburgher icon */}
      <div onClick={handleNav} className='sm:hidden z-10 mt-56 text-primary-text'>
        <MenuIcon fontSize='large' className='cursor-pointer'/>
      </div>
        {/*mobile menu */}
        <div className={nav ? 'overflow-y-hidden sm:hidden ease-in duration-300 absolute left-0 top-0 h-screen w-[80%] m-12 bg-black/90 px-4 py-7 flex flex-col justify-center items-center' : 'absolute hidden top-0 w-full h-screen left-{-100%} ease-in duration-500'}>
            <h1 className='m-1 p-1 text-[var(--primary-text)] dark:text-[var(--secondary-text)] text-3xl'>MENU</h1>
            
            <div className='p-2 m-1 flex flex-col justify-center items-start text-lg leading-10'>
                {/*<p className='font-bold text-2xl' >Tasks</p>*/}
                <span className='cursor-pointer'><Link to='/upcoming'>Upcoming</Link></span>
                <span className='cursor-pointer'><Link to='/today'>Today</Link></span>
                <span>Completed</span>
                <span>Calender</span>
                <span>Sticky Wall</span>
                <button type="button">Settings</button>
            </div>

        </div>


        <div className='dark:bg-primary-dark1 bg-[var(--secondary-text1)] sm:p-4 grid-flow-row rounded-xl'>
            <Today />
        </div>
    </div>
  )
}

export default MenuBar
