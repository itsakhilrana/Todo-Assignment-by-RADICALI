import {
  ADD_TASK_SUCCESS,
  ADD_TASK_FAIL,
  ADD_TASK_REQUEST,
  UPDATE_TASK_REQUEST
} from '../constants/constants'

export const addTaskAction = (taskDetails) => async (dispatch, getState) => {

  try {

    dispatch({ type: ADD_TASK_REQUEST })

    dispatch({ type: ADD_TASK_SUCCESS, payload: taskDetails })

    localStorage.setItem('tasks', JSON.stringify(getState().myTasks.tasks))
    
  } catch (error) {
    dispatch({ type: ADD_TASK_FAIL, payload: error })
  }
}

export const updateTaskAction = (taskDetails) => async (dispatch, getState) => {

  dispatch({ type: UPDATE_TASK_REQUEST, payload: taskDetails })
}

