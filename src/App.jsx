import React, { useState } from 'react';
import "./App.css"
function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button onClick={addTask}>Add</button>
      </div>
      {tasks.length === 0 ? (
        <p>No tasks added yet!</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index} >
             <p>{task}</p> 
              <button onClick={() => removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
