import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import EditNoteIcon from '@mui/icons-material/EditNote';

function DeleteTask({ task, onDelete, onEdit, isEditing }) {

  const [isTaskEditing, setIsTaskEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    if (isTaskEditing) {
      onEdit(editedTask);//save the edited task
      //setIsTaskEditing(false);
    }{/*else{
      setEditedTask(editedTask);//load the current task
      setIsTaskEditing(true);
    }*/}
    setIsTaskEditing(!isTaskEditing);
    
    if (isTaskEditing) {
      setEditedTask(task); // Reset edited task to the original task when exiting edit mode
    }
    //setIsTaskEditing(!isTaskEditing);//toggle edit mode
  }

  return (
    <div className="">
      <div className="flex gap-3 justify-between h">
        {isEditing && !isTaskEditing ? (
          <input
          className='text-gray-900'
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
        />
        ) : (
          <p className="w-[80%] truncate hover:text-clip">{task}</p>
          
        )}
        <button
          className="bg-secondary-text1 dark:bg-primary-text p-0.5 rounded hover:bg-primary-text hover:dark:bg-secondary-text1 hover:dark:text-primary-dark"
          onClick={handleEdit}
        >
          {isTaskEditing ? <SaveIcon /> : <EditNoteIcon />}
        </button>
        <button
          className="bg-secondary-text1 dark:bg-primary-text p-0.5 rounded hover:bg-primary-text hover:dark:bg-secondary-text1 hover:dark:text-primary-dark"
          onClick={onDelete}
        >
          <CloseIcon />
        </button>
      </div>
      <hr />
    </div>
  );
}

export default DeleteTask;

