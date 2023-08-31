import { h } from "preact";

const TodoItem = ({ text }) => {
  return (
    <div>
      <span>{text}</span>
      <button>Delete</button>
    </div>
  );
};

export default TodoItem;
