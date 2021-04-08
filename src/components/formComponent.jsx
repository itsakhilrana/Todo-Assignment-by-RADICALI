import React, { useState } from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addTaskAction } from '../reduxHelpers/actions/taskActions'
import DatePicker from 'react-datepicker'

import './formComponent.css'
import 'react-datepicker/dist/react-datepicker.css'

const FormComponent = () => {
  const dispatch = useDispatch()

  let history = useHistory()
  const updateTask = useSelector((state) => state.updateTask)

  const { task } = updateTask

  console.log(task)

  const [taskDetails, setTaskDetails] = useState({
    id: task.id,
    title: task.title,
    description: task.description,
    date: '',
    status: task.status,
  })

  console.log(taskDetails)

  const [formError, setFormError] = useState({})

  const formHandler = (e) => {
    e.preventDefault()

    if (!taskDetails.title && !taskDetails.description) {
      return setFormError({
        ...formError,
        titleError: "Title can't be empty",
        descriptionError: "Description can't be empty",
      })
    } else if (!taskDetails.title) {
      return setFormError({ titleError: "Title can't be empty" })
    } else if (!taskDetails.description) {
      return setFormError({
        ...formError,
        descriptionError: "Description can't be empty",
      })
    } else {
      dispatch(
        addTaskAction({
          id: '',
          title: taskDetails.title,
          description: taskDetails.description,
          date: moment(taskDetails.date).format('MM/DD/YYYY'),
          status: taskDetails.status,
        })
      )
    }

    history.push('/mytasks')
  }

  return (
    <div className="formComponent">
      <form>
        <label>Title</label>
        <input
          type="text"
          placeholder="What do you want to do?"
          value={taskDetails.title || ''}
          onChange={(e) => {
            setTaskDetails({ ...taskDetails, title: e.target.value })
          }}
        ></input>
        {formError.titleError && <p style={{color:'red', fontSize:"10px", marginBottom:"10px"}}>{formError.titleError}</p>}

        <label>Description</label>
        <textarea
          type="textarea"
          placeholder="A breif description about your task."
          value={taskDetails.description || ''}
          onChange={(e) => {
            setTaskDetails({ ...taskDetails, description: e.target.value })
          }}
        ></textarea>
        {formError.descriptionError && <p style={{color:'red', fontSize:"10px",marginBottom:"10px"}}>{formError.descriptionError}</p>}

        <div className="Timeline">
          <label>
            Due Date
            <DatePicker
              wrapperClassName="datePicker"
              selected={taskDetails.date}
              onChange={(newDate) => {
                setTaskDetails({ ...taskDetails, date: newDate })
              }}
              placeholderText="Pick your due date."
              dateFormat="MMMM eeee d, yyyy"
              className="form-control"
            />
          </label>

          <label>
            Status
            <select
              value={taskDetails.status || 'Todo'}
              onChange={(e) => {
                setTaskDetails({ ...taskDetails, status: e.target.value })
              }}
            >
              <option value="Todo">Todo</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Stalled">Stalled</option>
              <option value="Done">Done</option>
            </select>
          </label>
        </div>

        <button className="btn" type="submit" onClick={formHandler}>
          Save
        </button>
      </form>
    </div>
  )
}

export default FormComponent
