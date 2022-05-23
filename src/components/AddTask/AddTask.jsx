import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({addtask}) => {
  // NOTE: do not delete `data-cy` key value pair
  const[value,setvalue]=useState("")
  return (
    <div className="${styles.todoForm} ${styles.addtask}">
      <input data-cy="add-task-input" type="text" onChange={(e)=>{
        setvalue(e.target.value);

      }} />
      <button data-cy="add-task-button" onClick={()=>{
        addtask(value);
           console.log(value);
      }}>ADD</button>
    </div>
  );
};

export default AddTask;
