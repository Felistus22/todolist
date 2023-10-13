import React from 'react'

function DeleteTask({ task, onDelete }) {
  return (
    <div className=''>
      <div className='flex gap-3 justify-between h'>
        <p>{task}</p>
        <button className='bg-secondary-text1 dark:bg-primary-text p-0.5 rounded hover:bg-primary-text hover:dark:bg-secondary-text1 hover:dark:text-primary-dark' onClick={onDelete}>Delete</button>
      </div>
      <hr />
    </div>
  )
}

export default DeleteTask
