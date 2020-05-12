import React from "react";
import "./form.css";

const Form = (props) => {
  const { item } = props;

  return (
    <React.Fragment>
      <form className="form">
        <input
          className="input"
          type="text"
          placeholder="Enter todo for the day..."
          value={item}
          onChange={props.onInputChange}
          required
        />
        <br />
        <button
          disabled={!item.length}
          className="btn btn-success"
          onClick={(e) => {
            props.submitTodo(e, item);
          }}
        >
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};

export default Form;
