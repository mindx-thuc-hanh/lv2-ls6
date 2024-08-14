import React, { useState } from 'react'
import Tabs from '../components/TodoSection/Tabs'
import TodoList from '../components/TodoSection/TodoList'

const TodoSection = (props) => {
    const [category, setCategory] = useState('all')

    return (
        <div className='flex flex-col gap-4'>
            <Tabs
                category={category}
                setCategory={setCategory}
            />

            <TodoList category={category} setTodos={props.setTodos} todos={props.todos} />
        </div>
    )
}

export default TodoSection