import {
  ADD_TASK_SUCCESS,
  ADD_TASK_FAIL,
  ADD_TASK_REQUEST,
  UPDATE_TASK_REQUEST
} from '../constants/constants'

const myTasks = { loading: false, tasks: [], error: '' }

export const tasksReducer = (state = myTasks, action) => {
  switch (action.type) {
    case ADD_TASK_REQUEST:
      return { ...state, loading: true }

    case ADD_TASK_SUCCESS:
      let newTask = action.payload

      var getRndInteger = (m) => {
        return Math.floor(Math.random() * (1000 - 0 + 1) ) + 1000;
      }

      

      if(!newTask.id){
        newTask.id = getRndInteger()
      } 

      const existedTask = state.tasks.find((task) => {
        return task.id === newTask.id
      })

      if (existedTask) {
        return {
          ...state,
          loading: false,
          tasks: state.tasks.map((t) => {
            return t.id === existedTask.id ? newTask : t
          }),
        }
      } else {
        return { ...state, loading: false, tasks: [...state.tasks, newTask] }
      }
    case ADD_TASK_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}


const updateTask = {
  task : {}
}

export const updateTaskReducer = (state = updateTask, action) =>{
  switch (action.type){
    
    case UPDATE_TASK_REQUEST:
      return {...state, task : action.payload}

    default :
    return state
  }
}





// case COMPLETE_TASK:
//       const completedTask = action.payload

//       if (completedTask) {

//        const updateTaskList =  state.tasks.filter((task) => {
//           return task.title !== completedTask.title
//         })

//         return {...state, tasks:[...state.tasks, updateTaskList]}

//       }

// case UPDATE_TASK:
//   const updatedTask = action.payload
//   return { tasks: [...state.tasks, updatedTask] }
