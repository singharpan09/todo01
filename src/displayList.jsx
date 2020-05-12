import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import Edittodo from "./edittodo";
const DisplayList = (props) => {
  const { checked, name } = props.todo;

  return (
    <React.Fragment>
      <ul className="list-group">
        <li className="list-group-item">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => props.onCheckboxChange(props.todo)}
          />
          {name}

          {checked && (
            <div className="float-right">
              <span className="badge badge-secondary">Completed</span>
            </div>
          )}
        </li>
      </ul>
    </React.Fragment>
  );
};

export default DisplayList;
