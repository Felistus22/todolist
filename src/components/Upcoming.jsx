import React from 'react'

function Upcoming() {
  return (
    <div>
      <div className='dark:bg-primary-dark1 bg-secondary-text p-4 grid-flow-row rounded-xl'>
            <h1 className='p-2 text-2xl font-bold'>Tasks</h1>
            <div className='grid grid-flow-col gap-4 '>
                <div className='flex flex-col justify-center'>
                    <h1 className='p-1 text-lg'>Today</h1>
                    <span>go to church</span>
                    <span>go fishing</span>
                </div>
                <div className='flex flex-col justify-center'>
                    <h1 className='p-1 text-lg'>Completed</h1>
                    <span>morning chores</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Upcoming
