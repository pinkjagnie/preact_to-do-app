import { h, Component } from "preact";

import ToDoItem from "./ToDoItem";
class Main extends Component {
  state = {
    todos: [],
    newTodoText: "",
  };

  render() {
    const { todos, newTodoText } = this.state;

    return (
      <div>
        <h1>To Do List</h1>
        <input type="text" />
        <button>Add</button>
        <div>
          <h2>Things I have to do</h2>
          <div>
            <ToDoItem />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
