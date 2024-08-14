
import React, { useState } from "react"
import InputSection from "./layout/InputSection"
import TodoSection from "./layout/TodoSection"


// to do list
// name, id, isCompleted, category
// [
//   {
//     name: "Lam viec nha",
//     id: 1,
//     isCompleted: false,
//     category: 'nha'
//   },
//   {
//     name: "Gui email cho sep",
//     id: 2,
//     isCompleted: false,
//     category: 'cong-ty'
//   },
// ]
function App() {

  const [todos, setTodos] = useState([])

  return (
    <div className="flex flex-col gap-4 items-center">
      <InputSection
        setTodos={setTodos}
        todos={todos} />
      <TodoSection
        setTodos={setTodos}
        todos={todos} />


    </div>
  )
}

export default App
