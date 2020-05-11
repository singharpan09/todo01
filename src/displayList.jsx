import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import Edittodo from "./edittodo";
const DisplayList = (props) => {
  const { checked, name, id } = props.todo;

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
          {/* <Edittodo
            id={id}
            name={name}
            checked={checked}
            handleEdit={(value) => {
              props.handleEdit(value);
            }}
            handleEditChange={(e) => {
              props.handleEditChange(e);
            }}
          /> */}

          <button
            style={{ "margin-left": "85%" }}
            className="btn btn-danger"
            onClick={() => {
              props.deleteItem(id);
            }}
          >
            Delete
          </button>

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
