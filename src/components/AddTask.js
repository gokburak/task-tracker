import React, { useState } from "react";
import { v4 as keyId } from "uuid";
import Tasks from "./Tasks";

const AddTask = () => {
  const [inputValueUp, setInputValueUp] = useState();
  const [inputValueDown, setInputValueDown] = useState();
  const [task, setTask] = useState([
    {
      id: keyId(),
      task: "Study Project",
      time: "May 30th at 12:00",
    },
    {
      id: keyId(),
      task: "Attend In-clas",
      time: "May 30th at 21:15",
    },
  ]);
  const taskValue = (e) => {
    setInputValueUp(e.target.value);
  };

  const timeValue = (e) => {
    setInputValueDown(e.target.value);
  };


  const saveTask = (e) => {
    e.preventDefault();
    setTask([
      ...task,
      {
        id: keyId(),
        task: inputValueUp,
        time: inputValueDown,
      },
    ]);
    setInputValueUp("");
    setInputValueDown("");
  };
  return (
    <div>
      <form action="" onSubmit={saveTask}>
        <div className="form-floating  p-3">
          <input
            type="text"
            className="form-control"
            id="floatingInputs"
            placeholder="Add Task"
            onChange={taskValue}
            value={inputValueUp}
            required
          />
          <label htmlFor="floatingInputs" className="p-4 fs-5">
            Add Task
          </label>
        </div>
        <div className="form-floating mb-3  p-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Add Day and Time"
            onChange={timeValue}
            value={inputValueDown}
            required
          />
          <label htmlFor="floatingInput" className="p-4 fs-5">
            Add Day and Time
          </label>
        </div>
        <div className=" p-3">
          <input
            type="submit"
            value="Save Task"
            className="btn w-100 text-white p-2 btn-light"
            style={{ backgroundColor: "#810089" }}
            required
          />
        </div>
      </form>
      <Tasks task={task} />
    </div>
  );
};
export default AddTask;