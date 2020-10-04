import React from 'react'
import { Todo } from '../models/Todo'


interface TodoListItemProps {
  todo: Todo
}
const TodoItemList = (props: TodoListItemProps) => {

  function handleChange() {
    console.log('mudou')
  }

  function onRemove(todo: Todo) {
    console.log('remover', todo)
  }

  return (

    <tr className="uk-anamation-slide-bottom-medium">
      <td>
        <label htmlFor="">
          <input className="uk-ckeckbox" type="checkbox" checked={props.todo.done} onChange={handleChange} />
        </label>
      </td>
      <td className="uk-width-expand">{props.todo.title}</td>
      <td className="uk-width-auto">
        <button className="uk-icon-button uk-button-danger"
          uk-icon="trash" onClick={() => onRemove(props.todo)} ></button>
      </td>


    </tr>
  )
}

export default TodoItemList