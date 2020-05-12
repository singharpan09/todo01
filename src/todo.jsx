import React, { Component } from "react";
import DisplayList from "./displayList";
import { v4 as uuid } from "uuid";
import Form from "./form";

class TODO extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      item: "",
    };
  }

  handleOnChange = (event) => {
    this.setState({ item: event.target.value });
  };

  handleAddTodo = (event, newTodo) => {
    event.preventDefault();
    if (newTodo !== "") {
      const newitem = {
        id: uuid(),
        name: newTodo,
        checked: false,
      };

      const newList = [...this.state.todoList];
      newList.push(newitem);
      this.setState({
        todoList: newList,
        item: "",
      });
    }
  };

  handleChecked = (clickchange) => {
    console.log(clickchange);
    const check = [...this.state.todoList];
    const Index = check.indexOf(clickchange);

    check[Index] = { ...clickchange };
    check[Index].checked = check[Index].checked === true ? false : true;

    this.setState({
      todoList: check,
    });
  };

  render() {
    const { item, todoList } = this.state;

    return (
      <React.Fragment>
        <h1>Todo App</h1>

        {todoList.map((todo) => {
          if (todo.checked === true) {
            return (
              <DisplayList
                key={todo.id}
                todo={todo}
                onCheckboxChange={this.handleChecked}
              />
            );
          }
        })}
        {todoList.map((todo) => {
          if (todo.checked === false) {
            return (
              <DisplayList
                key={todo.id}
                todo={todo}
                onCheckboxChange={this.handleChecked}
              />
            );
          }
        })}
        <Form
          onInputChange={this.handleOnChange}
          item={item}
          submitTodo={this.handleAddTodo}
        />
      </React.Fragment>
    );
  }
}

export default TODO;
