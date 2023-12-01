import styles from "./todo.module.css";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <button onClick={() => completeTodo(todo.id)} className="complete">
        Completar
      </button>
      <button className="remover" onClick={() => removeTodo(todo.id)}>
        X
      </button>
    </div>
  );
};

export default Todo;
