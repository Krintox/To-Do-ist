import React from "react";
import ToDoList from "./components/ToDoList";
import Navbar from './components/Navbar'
import '../src/App.css'

export default function TodoInput() {

  const [task, setTask] = React.useState('')
  const [count, setCount] = React.useState(0)
  const [taskList, setTaskList] = React.useState([])
  const [disable, setDisable] = React.useState(true)

  const inputValue = e => {
      setTask(e.target.value)
      e.target.value === ''
      ?
      setDisable(true)
      :
      setDisable(false)
  }
  
  const [viewTaskList, setViewTaskList] = React.useState(true)

  const updateTaskList = () => {
    setTaskList([...taskList, {object: task, key: Date.now()}])
    setTask('')
    setViewTaskList(false)
    setCount(count + 1)
  }

  console.log(count)

    return (
      <div>
          <Navbar />
          <header>
            <div className="todolist-border">
                <div className="todo-input-form">
                    <input
                    className = "inputText" 
                    placeholder="Add a Task" 
                    value={task} 
                    onChange = {inputValue}
                    />
                    <button disabled = {disable} onClick = {updateTaskList} className="todo-add-button">+</button>
                </div>
                {
                  viewTaskList || count === 0
                  ?
                  <div className="pendingTasks-div">
                      <img className = "pending-task-image" 
                      src= "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/task-pending-cartoon-bussiness-vector-illustrations_zJCs81OO_SB_PM.jpg"
                      alt="pending-tasks" />
                      <p className="no-task-message">There are no pending tasks!! #Enjoy🥳🥳</p>
                  </div>
                  :
                  <ToDoList count = {count} setCount = {setCount} task = {task} taskList = {taskList} setTaskList = {setTaskList}/>
                }
            </div>
          </header>
      </div>
    )
}
