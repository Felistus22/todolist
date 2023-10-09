import React from 'react'

function MenuBar() {
  return (
    <div className='Menu'>
        <div className='w-fit'>
            <h1 className='m-1 p-1 text-[var(--primary-text)] dark:text-[var(--secondary-text)] text-xl'>MENU</h1>
            <div className='p-1 m-1'>
                <input type="search" name="" placeholder='Search' />
            </div>
            
            <div className='p-2 m-1 flex flex-col justify-center items-start'>
                <p className='font-bold text-xl' >Tasks</p>
                <span>Upcoming</span>
                <span>Today</span>
                <span>Calender</span>
                <span>Sticky Wall</span>
            </div>

            <div className='p-2 m-1 flex flex-col justify-center items-start'>
                <p className='font-bold text-xl'>Lists</p>
                <span>Personal</span>
                <span>Work</span>
                <button type="button">Add New List</button>
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

            <div className='p-1 m-1'>
                <button type="button">Signout</button>
            </div>

        </div>
    </div>
  )
}

export default MenuBar
