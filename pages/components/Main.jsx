import { h, Component } from "preact";

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
      </div>
    );
  }
}

export default Main;
