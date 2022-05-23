import React, { useState } from "react";


import styles from "./taskApp.module.css";
import  TaskHeader  from "./TaskHeader/TaskHeader";
import AddTask from "./AddTask/AddTask";
import Task from "./Task/Task";
import Tasks from "./Tasks/Tasks";

const TaskApp = () => {
  const [task,settask]=useState([]);
  const addtask=(newtask)=>{
    settask([...task,newtask])

  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
     
      <TaskHeader/>
      {/* Add Task */}
     <AddTask addtask={addtask}/>
      {/* Tasks */}
      <Task task={task}/>
      <Tasks task={task}/>

    </div>
  );
};

export default TaskApp;
