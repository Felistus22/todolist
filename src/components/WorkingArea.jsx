import React, { useState } from 'react'
import MenuBar from './MenuBar'
import Today from './Today'

function WorkingArea() {

  const [selectedComponent, setSelectedComponent] = useState(null);

  return (
    <div className='flex flex-row justify-evenly'>
      <div className=' '>
        <MenuBar onSelectComponent={setSelectedComponent}/>
        
      </div>
      <div className='bg-primary-light dark:bg-primary-dark w-full'>
        {selectedComponent? (selectedComponent ) 
        : (<Today />)}
      </div>
    </div>
  )
}

export default WorkingArea
