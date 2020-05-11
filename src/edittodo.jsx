import React from "react";

const Edittodo = (props) => {
  return (
    <React.Fragment>
      <input
        onChange={(e) => {
          props.handleEditChange(e);
        }}
        type="text"
        value={props.name}
      />
      <button
        onClick={() => {
          props.handleEdit(props);
        }}
      >
        Save
      </button>
    </React.Fragment>
  );
};
export default Edittodo;
