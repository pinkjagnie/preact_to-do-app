import { h, Component } from "preact";

import ToDoItem from "./ToDoItem";
class Main extends Component {
  state = {
    todos: [],
    newTodoText: "",
  };

  newTodoChangeHandler = (e) => {
    this.setState({ newTodoText: e.target.value });
    console.log("klik");
  };

  addTodoHandler = () => {
    const { todos, newTodoText } = this.state;
    if (newTodoText) {
      this.setState({
        todos: [...todos, newTodoText],
        newTodoText: "",
      });
    }
    console.log("adding " + newTodoText);
  };

  render() {
    const { todos, newTodoText } = this.state;

    return (
      <div>
        <h1>To Do List</h1>
        <input
          type="text"
          value={newTodoText}
          onChange={this.newTodoChangeHandler}
        />
        <button onClick={this.addTodoHandler}>Add</button>
        <div>
          <h2>Things I have to do</h2>
          <div>
            {todos.map((todo, index) => (
              <ToDoItem text={todo} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
