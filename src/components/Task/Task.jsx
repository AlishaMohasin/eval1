import React from "react";
import styles from "./task.module.css";
import tasks from   "../../data/tasks.json"
import Counter from "../Counter/Counter";

const Task = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    
    <li data-cy="task" className={styles.task}>
    
      <input type="checkbox" data-cy="task-checkbox" />
      {tasks.map(task=>(  <div data-cy="task-text" key={task.id}>{task.text}</div>))}
    
      {<Counter/>}
      <button data-cy="task-remove-button">Remove</button>
    </li>
  );
};

export default Task;
