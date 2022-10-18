import style from './todo.module.scss'
import remove from '../assets/icons/remove.svg'
import { useAppDispatch } from '../store/hooks'
import { removeTodo } from '../store/reducers/todosSlice'

function Todo(props: { text: string; id: number }) {
  const dispatch = useAppDispatch()

  function removeHandler() {
    dispatch(removeTodo(props.id))
  }

  return (
    <div className={style.todo} data-cy="todo">
      <span>{props.text}</span>
      <img src={remove} alt="remove" onClick={removeHandler} />
    </div>
  )
}

export default Todo
