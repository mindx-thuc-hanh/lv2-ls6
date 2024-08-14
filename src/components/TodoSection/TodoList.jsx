import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {
    const { todos, setTodos, category } = props
    return (
        todos
            .filter(
                todo =>
                    category === 'all' ? true :
                        todo.category === category
            )
            .map(todo =>
                <TodoItem key={todo.id} setTodos={setTodos} todo={todo} />)
    )
}

export default TodoList