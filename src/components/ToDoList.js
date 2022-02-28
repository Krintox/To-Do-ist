import React from "react";

export default function ToDoList(props) {

    const deleteTaskListItem = (key) => {
        const updatedList = props.taskList.filter((item) => {
            return (
                item.key !== key
            )
        })
        props.setTaskList(updatedList)
    }

    const [strike, setStrike] = React.useState(false)
    const checkboxChecked = () => {
        strike ? setStrike(false) : setStrike(true)
    }
    const styles = {
        textDecoration: strike ? "line-through" : "none" 
    }

    return(
        <div>
            {props.taskList.map((item) => {
                return (
                <div key = {item.key} className="todolist-div">
                    <input type="checkbox" className="list-checkbox" onChange={checkboxChecked}></input>
                    <p style={styles}>{item.object}</p>
                    <button onClick={()=>deleteTaskListItem(item.key)} className="delete-button">X</button>
                </div>
                )
            })}
        </div>
    )
}