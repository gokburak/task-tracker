import React, { useState } from "react";

const Tasks = ({ task }) => {


  const [style, setStyle] = useState(false);

  const styleClick = (e) => {

    setStyle(!style);

    if (style === false) {
      e.target.style.textDecoration = "line-through";
    } else {
      e.target.style.textDecoration = "none";
    }
  };
  const removeClick = (e) => {
    e.target.parentElement.parentElement.remove();
    task.length--;
    // if (task.length < 1) {
    //   alert("Task to empty");
    // }
  };
  return (
    <div>
      <div className="container">

        {task.map((item) => (
          <div className="row p-3" key={item.id}>
            <div className="col bg-white ps-3 text-start" style={{cursor:"pointer"}} onClick={styleClick}>
              <h5 className="mt-3">{item.task}</h5>
              <p className="fst-italic"> {item.time} </p>
            </div>
            <div className="col bg-white pt-2 text-end">
              <button
                className="btn btn-close btn-warning"
                type="reset"
                onClick={removeClick}
              ></button>
            </div>

          </div>
        ))}
        {task.length < 1 && <h5>No Tasks to Show</h5>}
      </div>
     

    </div>
  );
};
export default Tasks;








