import React from "react";
import styles from "./tasks.module.css";
import tasks from   "../../data/tasks.json"

const Tasks = ({task}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {task.map((tasks)=>(<li>{tasks}</li>))}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
