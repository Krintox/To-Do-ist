import React from "react";
import Navbar from './components/Navbar'
import '../src/App.css'

export default function TodoInput() {

  const saveLocalTasks = () => {
    let savedTasks = localStorage.getItem('tasks');
    console.log(savedTasks)

    if (savedTasks) {
        return JSON.parse(localStorage.getItem('tasks'));
    } else {
        return [];
    }
}

  const [task, setTask] = React.useState('')
  const [taskList, setTaskList] = React.useState(saveLocalTasks)
  const [disable, setDisable] = React.useState(true)
  const [edit, setEdit] = React.useState(true)
  const [isTaskEdit, setIsTaskEdit] = React.useState(null)

  React.useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList))
 }, [taskList]);

  
 const updateTaskList = () => {
   if (task && !edit) {
     setEdit(true)
     setTaskList(
       taskList.map((item) => {
         if(item.key === isTaskEdit) {
           return {...item, object: task}
          }
          return item
        })
        )
      }else {
        setTaskList([...taskList, {object: task, key: Date.now(), completed: false}])
        setTask('')
        setDisable(true)
      }
}

  const inputValue = e => {
      setTask(e.target.value)

      e.target.value === '' || task === '' || task.length === 0
      ?
      setDisable(true)
      :
      setDisable(false)
  }
  console.log(task.length)

  const deleteTaskListItem = (key) => {
    const updatedList = taskList.filter((item) => {
        return (
            item.key !== key
        )
    })
    setTaskList(updatedList)
  }

  const editTask = (key) => {
    let newTask = taskList.find((item) => {
        return (
          item.key === key
        )
    })
    console.log(newTask)
    setEdit(false)
    setTask(newTask.object)
    setIsTaskEdit(key)    
  }
  const boxChecked = (key) => {
    let checkedTask = [...taskList].map((item) => {
      if (item.key === key) {
        item.completed = !item.completed
      }
      return (
        item
      )  
    })
    setTaskList(checkedTask)
  }

  const buttonAddEdit = edit ? "+" : <i className="fas fa-edit"></i>
  
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
                      <button 
                      disabled = {disable} 
                      onClick = {updateTaskList} className="todo-add-button">
                      {buttonAddEdit}
                      </button>                  
                </div>
                  <div>
                      {taskList.map((item) => {
                          return (
                              <div key = {item.key} className="todolist-div">
                              <input type="checkbox" className="list-checkbox" id="completed"
                              checked = {item.completed}
                              onChange={() => boxChecked(item.key)}
                              >
                              </input>
                              <p>{item.object}</p>
                              <div>
                                  <button className="edit-button" onClick={() => editTask(item.key)}>
                                  <i className="fas fa-edit"></i>
                                  </button>
                                  <button onClick={()=>deleteTaskListItem(item.key)} className="delete-button">
                                    X
                                  </button>
                              </div>
                          </div>
                          )
                      })}
                  </div>
            </div>
          </header>
      </div>
    )
}
