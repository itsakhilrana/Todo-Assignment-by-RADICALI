import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {updateTaskAction} from '../reduxHelpers/actions/taskActions'
import './taskScreen.css'

const TaskScreen = ({ history }) => {
  
  const myTasks = useSelector((state) => state.myTasks)
  console.log(myTasks)
  const dispatch = useDispatch()
  const { loading, tasks, error } = myTasks

 
  

  const updateHandler = (task) => {
    dispatch(updateTaskAction(task))
    history.push('/')
  }
  return (
    <div className="taskScreen">
      <div className="tableView">
        <div className="tableContainer">
          <ul className="tableHeader">
            <li>Task Name</li>
            <li>Progress Status</li>
            <li>Description</li>
            <li>Due Date</li>
          </ul>
          {loading ? (
            <p>Loading</p>
          ) : error ? (
            <p>error</p>
          ) : (
            <>
              {tasks.map((task) => {
                return (
                  <ul className="tableBody">
                    <li>{task.title}</li>

                    <li>{task.status}</li>
                    <li>{task.description}</li>
                    <li>{task.date}</li>
                    <li>
                      <button onClick={() => updateHandler(task)}>
                        Update
                      </button>
                    </li>
                  </ul>
                )
              })}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default TaskScreen
