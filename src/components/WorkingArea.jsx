import React from 'react'
import MenuBar from './MenuBar'
import Today from './Today'

function WorkingArea() {
  return (
    <div className='flex flex-row justify-evenly'>
      <div className=' '>
        <MenuBar />
        
      </div>
      <div className='bg-primary-light dark:bg-primary-dark w-full'>
        <Today />
      </div>
    </div>
  )
}

export default WorkingArea
