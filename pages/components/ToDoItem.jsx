import { h } from "preact";

const ToDoItem = ({ text, onDelete }) => {
  return (
    <div class="toDoItemWrapper">
      <span>{text}</span>
      <button onClick={onDelete} class="deleteButton">
        Delete
      </button>
    </div>
  );
};

export default ToDoItem;
