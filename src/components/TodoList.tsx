import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import { TodoContextType } from '../contexts/TodoContextType'
import TodoItemList from './TodoListemItem'

const TodoList = () => {
    const { todos } = useContext<TodoContextType>(TodoContext)



    return (
        <table className="uk-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tarefa</th>
                    <th></th>

                </tr>
            </thead>
            <tbody>

                {
                    todos?.map(todo => (
                        <TodoItemList key={todo.id} todo={todo} />
                        // <tr key={obj.id}>
                        //     <td>{obj.id}</td>
                        //     <td>{obj.title}</td>
                        //     <td>{obj.done}</td>
                        // </tr>
                    ))
                }
            </tbody>
        </table>
    )

}

export default TodoList