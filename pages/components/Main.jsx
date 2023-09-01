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
      const updatedTodos = [...todos, newTodoText];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));

      this.setState({
        todos: updatedTodos,
        newTodoText: "",
      });
    }
    console.log("adding " + newTodoText);
  };

  deleteTodoHandler = (index) => {
    const { todos } = this.state;
    const updatedTodos = todos.filter((_, i) => i !== index);

    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    this.setState({
      todos: updatedTodos,
    });
  };

  editTodoItemHandler = (index, newText) => {
    const { todos } = this.state;
    const updatedTodos = [...todos];
    updatedTodos[index] = newText;

    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    this.setState({
      todos: updatedTodos,
    });
  };

  componentDidMount() {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      this.setState({
        todos: JSON.parse(savedTodos),
      });
    }
  }

  render() {
    const { todos, newTodoText } = this.state;

    return (
      <div>
        <h1>To Do List</h1>
        <input
          type="text"
          value={newTodoText}
          onChange={this.newTodoChangeHandler}
          placeholder="What task for today?"
        />
        <button onClick={this.addTodoHandler}>Add</button>
        <div>
          <h2>Things I have to do</h2>
          <div>
            {todos.length === 0 ? (
              <p>No tasks found</p>
            ) : (
              todos.map((todo, index) => (
                <ToDoItem
                  text={todo}
                  onDelete={() => this.deleteTodoHandler(index)}
                  onEdit={(newText) => this.editTodoItemHandler(index, newText)}
                />
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
