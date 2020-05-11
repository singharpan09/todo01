import React from "react";

const Form = (props) => {
  const { item } = props;
  const style = item.length === 0 ? "form-control is-invalid" : "form-control";
  return (
    <React.Fragment>
      <form>
        <input
          className={style}
          type="text"
          placeholder="Enter todo..."
          value={item}
          onChange={props.onInputChange}
          required
        />
        <br />
        <button
          disabled={!item.length}
          className="btn btn-light"
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
