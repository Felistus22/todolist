import React from 'react'

function Today() {
  return (
    <div className='m-0 w-[100%]'>
      <div className='p-2 w-[100%] grid grid-flow-row sm:justify-center rounded-xl'>
            <h1 className='p-2 text-2xl font-bold text-center dark:text-primary-text'>Tasks</h1>
            <div className='grid sm:grid-flow-col grid-flow-row w-[100%] sm:justify-center sm:grid-template-colll gap-0 sm:gap-4 '>
                <div className='flex flex-col justify-center items-center min-h-[200px] sm:min-h-[240px] m-4 dark:bg-primary-dark bg-primary-light p-4 w-[90%] sm:w-[100%] rounded dark:border border-slate-700'>
                    <h1 className='p-1 text-lg'>Today</h1>
                    <span>go to church</span>
                    <span>go fishing</span>
                </div>
                <div className='flex flex-col justify-center items-center min-h-[200px] sm:min-h-[240px] m-4 dark:bg-primary-dark bg-primary-light p-4 w-[90%] rounded dark:border border-slate-700'>
                    <h1 className='p-1 text-lg'>Completed</h1>
                    <span>morning chores</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Today
