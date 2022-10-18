import { useAppSelector } from "../store/hooks";
import Todo from "./Todo";
import style from "./todos.module.scss";

function Todos() {
  const todos = useAppSelector((state) => state.todos.data);

  const todoList = todos.map((todo) => (
    <Todo key={todo.id} text={todo.text} id={todo.id} />
  ));

  return <div className={style.todos}>{todoList}</div>;
}

export default Todos;
