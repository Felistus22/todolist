import React, { useState } from 'react'
import DeleteTask from './DeleteTask';

function Today() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask){
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  }

  const deleteTask = (taskIndex) => {
    const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(updatedTasks);
  } 

  return (
    <div className='m-1 bg-secondary-text1 dark:bg-primary-dark1 rounded-xl h-[85vh] dark:text-primary-light'>
      <div className='p-2 w-[100%] grid grid-flow-row sm:justify-center rounded-xl'>
            <h1 className='p-2 text-2xl font-bold text-center dark:text-primary-text'>Tasks</h1>
            <div className='grid sm:grid-flow-col grid-flow-row w-[100%] sm:justify-center sm:grid-template-colll gap-0 sm:gap-4 '>
                <div className='flex flex-col justify-center items-center min-h-[200px] sm:min-h-[240px] m-4 dark:bg-primary-dark bg-primary-light p-4 w-[90%] sm:w-[100%] rounded dark:border border-slate-700'>
                    <h1 className='p-1 text-lg'>Today</h1>
                    <div className="task-container w-[90%]">
                      {tasks.map((task, index) => (
                        <DeleteTask key={index} task={task} onDelete={() => deleteTask(index)} />
                      ))}
                    </div>
                    <div className='flex flex-row'>
                      <input className='w-[70%] mt-1 text-primary-dark outline-none rounded-sm'
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                      />
                      <button onClick={addTask}>Add Task</button>
                    </div>
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
