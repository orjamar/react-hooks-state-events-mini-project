import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [task, setTask] = useState({ text: "", category: categories[0] });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(task);
    setTask({ text: "", category: categories[0] });
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={task.text}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={task.category}
          onChange={handleInputChange}
        >
          {categories
            .filter((category) => category !== "All")
            .map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
