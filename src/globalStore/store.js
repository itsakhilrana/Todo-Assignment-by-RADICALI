import { createStore, combineReducers, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {tasksReducer, updateTaskReducer} from '../reduxHelpers/reducers/taskReducers'


const reducer = combineReducers({
  myTasks : tasksReducer,
  updateTask : updateTaskReducer
})

const taskFromStorage = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []

const initialState = {
  myTasks : {tasks: taskFromStorage}
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
