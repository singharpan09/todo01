import React, { Component } from "react";
import DisplayList from "./displayList";
import { v4 as uuid } from "uuid";
import Form from "./form";
import "./todo.css";

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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,64L34.3,90.7C68.6,117,137,171,206,170.7C274.3,171,343,117,411,80C480,43,549,21,617,48C685.7,75,754,149,823,154.7C891.4,160,960,96,1029,90.7C1097.1,85,1166,139,1234,176C1302.9,213,1371,235,1406,245.3L1440,256L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
        <div className="todo">
          <center>
            <div class="inputform">
              <h1>#Todo_App</h1>
              <Form
                onInputChange={this.handleOnChange}
                item={item}
                submitTodo={this.handleAddTodo}
              />
            </div>

            <h3 style={{ color: "green" }}>#Completed</h3>

            {todoList.map((todo) => {
              if (todo.checked === true) {
                return (
                  <React.Fragment>
                    <DisplayList
                      key={todo.id}
                      todo={todo}
                      onCheckboxChange={this.handleChecked}
                      statue="Completed"
                    />
                  </React.Fragment>
                );
              }
            })}
            <h3 style={{ color: "red" }}>#Not_Done_Yet</h3>

            {todoList.map((todo) => {
              if (todo.checked === false) {
                return (
                  <DisplayList
                    key={todo.id}
                    todo={todo}
                    onCheckboxChange={this.handleChecked}
                    statue="Not Done"
                  />
                );
              }
            })}
            <h3>#Here_is_All_for_the_Day</h3>

            {todoList.map((todo) => {
              if (todo.checked === false || todo.checked === true) {
                return (
                  <DisplayList
                    key={todo.id}
                    todo={todo}
                    onCheckboxChange={this.handleChecked}
                    statue="All Todo for the day...."
                  />
                );
              }
            })}
          </center>
        </div>
      </React.Fragment>
    );
  }
}

export default TODO;
