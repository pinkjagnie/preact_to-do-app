import { h } from "preact";

const TodoItem = ({ text, onDelete }) => {
  return (
    <div class="toDoItemWrapper">
      <span>{text}</span>
      <button onClick={onDelete} class="deleteButton">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
