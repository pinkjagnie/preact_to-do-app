import { h } from "preact";

const TodoItem = ({ text, onDelete }) => {
  return (
    <div>
      <span>{text}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
