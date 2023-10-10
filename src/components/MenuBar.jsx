import React from 'react'
import {Link} from 'react-router-dom'
//import Upcoming from './Upcoming'
import Today from './Today'

function MenuBar() {
  return (
    <div className='Menu dark:text-primary-light grid grid-flow-col grid-template-col h-full'>
        <div className='p-1'>
            <h1 className='m-1 p-1 text-[var(--primary-text)] dark:text-[var(--secondary-text)] text-xl'>MENU</h1>
            <div className='p-1 m-1'>
                <input type="search" name="" placeholder='Search' />
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

        

        <div className='dark:bg-primary-dark1 bg-secondary-text p-4 grid-flow-row rounded-xl'>
            <Today />
        </div>
    </div>
  )
}

export default MenuBar
