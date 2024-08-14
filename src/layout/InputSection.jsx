import React, { useState } from 'react'
import tabData from "../data/tab-data.json"
console.log(tabData)
const InputSection = (props) => {
    const { todos, setTodos } = props
    const [text, setText] = useState('')
    const addTodoButtonClickHandler = () => {
        const newTodo = {
            name: text,
            id: todos.length + 1,
            isCompleted: false,
            // 0 -> 2
            category: tabData[Math.floor(Math.random() * 3)]
        }
        const newTodos = [...todos, newTodo]
        setTodos(newTodos)
        setText('')
    }
    return (
        <div className='flex gap-4'>
            <input value={text} onChange={e =>
                setText(e.target.value)} />
            <button onClick={addTodoButtonClickHandler}>Them</button>
        </div>
    )
}

export default InputSection