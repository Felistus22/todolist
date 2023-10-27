import React, { useEffect, useState } from 'react'
import DeleteTask from './DeleteTask';
import AddIcon from '@mui/icons-material/Add';

function Today() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editedTask, setEditedTask] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(-1); // Initialize with -1 to indicate no task is being edited initially

  const addTask = () => {
    if (newTask){
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setNewTask('');//clear the input field
    }
  }
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  const editTask = (taskIndex) => {
    setEditedTask(tasks[taskIndex]);// Set the currently edited task
    setIsEditing(true); // Set the editing flag
  }

  const updateTask = (taskIndex) => {
    if (editedTask) {
      const updatedTasks = [...tasks];
      updatedTasks[taskIndex] = editedTask;
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      setEditedTask(''); // Clear the edited task
      setIsEditing(false); // Clear the editing flag
    }
  }

  const deleteTask = (taskIndex) => {
    const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(updatedTasks);
  } 

  return (
    <div className='m-1 bg-secondary-text1 dark:bg-primary-dark1 rounded-xl h-[95vh] dark:text-primary-light'>
      <div className='p-2 w-[100%] grid grid-flow-row sm:justify-center rounded-xl'>
            <h1 className='p-2 text-2xl font-bold text-center dark:text-primary-text'>Tasks</h1>
            <div className='grid sm:grid-flow-col grid-flow-row w-[100%] sm:justify-center sm:grid-template-colll gap-0 sm:gap-4 '>
               <div className='today flex flex-col justify-center items-center'>
                <h1 className='p-1 text-lg'>Today</h1>
                <div className='flex flex-col justify-center items-center min-h-[200px] sm:min-h-[240px] m-4 dark:bg-primary-dark bg-primary-light p-4 w-[90%] sm:w-[100%] rounded dark:border border-slate-700'>
                      
                      <div className="task-container w-[90%]">
                        {tasks.map((task, index) => (
                          <div>
                            <DeleteTask 
                             key={index}
                             task={task}
                             onDelete={() => deleteTask(index)} 
                             onEdit={()=> editTask(index)} 
                             edittedTask = {editedTask} 
                             isEditing = {isEditing}  />
                          </div>
                        ))}
                      </div>
                      <div className='flex flex-row w-[90%]'>
                        <input className='w-[90%] md:h-[100%] mt-1 text-primary-dark outline-none rounded-sm'
                          type="text" placeholder='Add Task'
                          value={newTask}
                          onChange={(e) => setNewTask(e.target.value)}
                        />
                        <button className='text-primary-text' onClick={addTask}><AddIcon /></button>
                      </div>
                </div>
               </div>
               <div className='completed flex flex-col justify-center items-center'>
                  <h1 className='p-1 text-lg'>Completed</h1>
                  <div className='flex flex-col justify-center items-center min-h-[200px] sm:min-h-[240px] m-4 dark:bg-primary-dark bg-primary-light p-4 w-[90%] rounded dark:border border-slate-700'>
                      
                      <span>morning chores</span>
                  </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Today
