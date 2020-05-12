import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./displaylist.css";

const DisplayList = (props) => {
  const { checked, name } = props.todo;

  return (
    <React.Fragment>
      <p className="list">
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
      </p>
    </React.Fragment>
  );
};

export default DisplayList;
