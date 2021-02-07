import React from "react";
import "./App.css";

const Task = (props) => {
  const style = {
    color: "rgb(207, 90, 12)",
  };
  const { text, date, id, active, important, finishDate } = props.task;

  if (active) {
    return (
      <div>
        <p className="todotask">
          <button className="ok" onClick={() => props.change(id)}>
            <i class="far fa-check-circle"></i>
          </button>
          <strong className="oneTask" style={important ? style : null}>
            {text}
          </strong>

          <span
            style={{
              fontSize: 18,
              fontStyle: "italic",
            }}
          >
            {" -"}
            {date}
          </span>
          <button className="cancel" onClick={() => props.delete(id)}>
            <i class="fas fa-trash"></i>
          </button>
        </p>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleDateString();
    return (
      <div>
        <p>
          <strong>- {text}</strong>
          <br />
          wykonano: <span> {finish}</span>
          <button className="cancel" onClick={() => props.delete(id)}>
            <i class="fas fa-trash"></i>
          </button>
        </p>
      </div>
    );
  }
};
export default Task;
