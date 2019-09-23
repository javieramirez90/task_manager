import React, { useState, useEffect } from "react";

const TasksList = () => {
  const [hasError, setErrors] = useState(false);
  const [tasks, setTasks] = useState({});

  async function fetchData() {
    const res = await fetch("http://localhost:3000/api/tasks");
    res
      .json()
      .then(res => setTasks(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <span>{JSON.stringify(tasks)}</span>
      <hr />
    </div>
  );
};
export default TasksList;