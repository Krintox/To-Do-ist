import React from "react";
import ToDoList from "./components/ToDoList";
import Navbar from './components/Navbar'
import '../src/App.css'

export default function TodoInput() {

  const [task, setTask] = React.useState('')
  const [taskList, setTaskList] = React.useState([])

  const inputValue = e => {
      setTask(e.target.value)
  }

  const updateTaskList = () => {
    setTaskList([...taskList, {object: task, key: Date.now()}])
    setTask('')
  }

    return (
      <div>
          <Navbar />
          <header>
            <div className="todolist-border">
                <div className="todo-input-form">
                    <input className = "inputText" placeholder="Add Task" value={task} onChange = {inputValue}/>
                    <button onClick = {updateTaskList} className="todo-add-button">+</button>
                </div>
                    <ToDoList taskList = {taskList} setTaskList = {setTaskList} />
            </div>
          </header>
      </div>
    )
}