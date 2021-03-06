import { useState, useMemo } from 'react'

import axios from 'axios';
const url = 'http://localhost:3000/api';

let create_task = (data) => {
  return axios.post(`${url}/tasks/create`, data, {withCredentials: true})
}
let edit_task = (data) => {
  return axios.post(`${url}/tasks/edit/${data._id}` , data, {withCredentials: true})
}
let delete_task = (data) => {
  return axios.post(`${url}/tasks/delete/${data}` , data , {withCredentials: true})
}
let get_tasks = () => {
  return axios.get(`${url}/tasks`)
}

/**
 * Our custom React hook to manage state
 */

const useAppState = () => {
  const initialState = {
    tasks: [],
    selected_task: ''
  }

  // Manage the state using React.useState()
  const [state, setState] = useState(initialState)

  // Build our actions. We'll use useMemo() as an optimization,
  // so this will only ever be called once.
  const actions = useMemo(() => getActions(setState), [setState])

  return { state, actions }
}

// Define your actions as functions that call setState().
// It's a bit like Redux's dispatch(), but as individual
// functions.
const getActions = setState => ({
  create_task: (data) =>{
    console.log("La data", data)
    let taskData
    create_task(data)
    .then(response => {
      taskData = response.data
      get_tasks()
      console.log("En taskState", taskData)
    })
  },
  get_tasks: () => {
    get_tasks()
    .then(response => {
      console.log(response.data)
      setState(state => ({...state, tasks: response.data}))
    })
  },
  delete_task: (id) => {
    delete_task(id)
    .then(response => {
      get_tasks()
    })
  },
  doneyet: (data) => {
    edit_task(data)
    .then(response => {
      get_tasks()
    })
  }
})

export default useAppState;