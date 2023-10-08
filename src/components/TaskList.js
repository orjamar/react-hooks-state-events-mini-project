import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          category={task.category}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </div>
  );
}

export default TaskList;
