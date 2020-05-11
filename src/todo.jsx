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
        checked: true,
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

  handleDelete = (id) => {
    const newList = [...this.state.todoList];

    const updateList = newList.filter((item) => item.id !== id);
    this.setState({
      todoList: updateList,
    });
  };

  handleEdit = (value) => {
    const Edit = [...this.state.todoList];

    const Index = Edit.indexOf(value);

    Edit[Index] = { ...value };
    Edit[Index].name = value.name;

    //   const i = Edit.filter((i) => {
    //     Edit.indexOf(value.id);
    //   });
    //   console.log(i);
    this.setState({ todoList: Edit });
  };
  handleEditChange = (e) => {
    console.log(e.target.value);
  };

  render() {
    const { item, todoList } = this.state;

    return (
      <React.Fragment>
        <h1>Todo App</h1>

        {todoList.map((todo) => (
          <DisplayList
            key={todo.id}
            todo={todo}
            onCheckboxChange={this.handleChecked}
            handleEdit={this.handleEdit}
            handleEditChange={this.handleEditChange}
            deleteItem={this.handleDelete}
          />
        ))}
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
