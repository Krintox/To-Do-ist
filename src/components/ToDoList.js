import React from "react";

export default function ToDoList(props) {

    const deleteTaskListItem = (key) => {
        const updatedList = props.taskList.filter((item) => {
            return (
                item.key !== key
            )
        })
        props.setTaskList(updatedList)
        props.setCount(props.count - 1)
    }
    

    return(
        <div>
            {props.taskList.map((item) => {
                return (
                <div key = {item.key} className="todolist-div">
                    <input type="checkbox" className="list-checkbox">
                    </input>
                    <p>{item.object}</p>
                    <button onClick={()=>deleteTaskListItem(item.key)} className="delete-button">X</button>
                </div>
                )
            })}
        </div>
    )
}
