import React, { useState } from 'react'

//   {
//     name: "Gui email cho sep",
//     id: 2,
//     isCompleted: false,
//     category: 'cong-ty'
//   },
const TodoItem = (props) => {
    const { todo, setTodos } = props
    const [isEdit, setIsEdit] = useState(false)
    const [editText, setEditText] = useState(todo.name)
    const itemClickHandler = () => {
        setTodos(prev => [...prev.map(v => {
            console.log(v)
            if (v.id === todo.id) {
                v.isCompleted = !v.isCompleted
            }
            return { ...v }
        })])
    }
    const deleteButtonClickHandler = () => {
        setTodos(prev => [...prev.filter(v => {
            console.log(v)
            if (v.id === todo.id) {
                return false
            }
            return true
        })])
    }

    const saveButtonClickHandler = () => {
        setTodos(prev => [...prev.map(v => {
            if (v.id === todo.id) {
                v.name = editText
            }
            return { ...v }
        })])
        // ->
        setIsEdit(false)
    }
    return (
        <div className={`flex gap-4 ${todo.isCompleted ? 'line-through' : ''}`}>
            <p onClick={itemClickHandler}>{todo.id}</p>
            <input
                value={editText}
                onChange={e => setEditText(e.target.value)}
                disabled={!isEdit}
            />
            <button onClick={deleteButtonClickHandler}>Xoa</button>
            {
                isEdit ?
                    <div className='flex gap-4 items-center'>
                        <button onClick={saveButtonClickHandler}>Luu</button>
                        <button onClick={() => {
                            setEditText(todo.name)
                            setIsEdit(false)
                        }}>Huy</button>
                    </div>
                    : <button onClick={() => setIsEdit(!isEdit)}>Sua</button>
            }

        </div>
    )
}

export default TodoItem