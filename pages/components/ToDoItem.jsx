import { h, Component } from "preact";

class ToDoItem extends Component {
  state = {
    isEditing: false,
    editText: this.props.text,
  };

  editHandler = () => {
    this.setState({ isEditing: true });
  };

  editChangeHandler = (e) => {
    this.setState({ editText: e.target.value });
  };

  saveHandler = () => {
    const { editText } = this.state;
    this.props.onEdit(editText);
    this.setState({ isEditing: false });
  };

  render() {
    const { text, onDelete } = this.props;
    const { isEditing, editText } = this.state;

    if (isEditing) {
      return (
        <div class="toDoItemWrapper">
          <input
            type="text"
            value={editText}
            onChange={this.editChangeHandler}
            class="editInput"
          />
          <button onClick={this.saveHandler} class="saveButton">
            Save
          </button>
        </div>
      );
    }

    return (
      <div class="toDoItemWrapper">
        <span>{text}</span>
        <button onClick={onDelete} class="deleteButton">
          Delete
        </button>
        <button onClick={this.editHandler} class="editButton">
          Edit
        </button>
      </div>
    );
  }
}

export default ToDoItem;
