import { useState, useMemo } from 'react'

import axios from 'axios';
const url = 'http://localhost:3000/api';

let signup = (data) => {
  return axios.post(`${url}/signup` , data, {withCredentials: true})
}
let login = (data) => {
  return axios.post(`${url}/login` , data, {withCredentials: true})
}
let logout = () => {
  return axios.post(`${url}/logout`)
}
let loggedin = () => {
  return axios.get(`${url}/loggedin`, {withCredentials: true})
}

/**
 * Our custom React hook to manage state
 */

const useAppAuthState = () => {
  const initialState = {
    modalState: false,
    user: null,
    message: ''
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
  signup: (x) => {
    let userData
    signup(x)
    .then(response => {
      userData= response.data
      console.log("En userAppS", userData)
      setState(state => ({...state, user: response.data}))
    })
  },
  login: (x) => {
    let userData
    login(x)
    .then(response => {
      userData= response.data
      console.log("En userAppS", userData)
      setState(state => ({...state, user: response.data}))
    })

  },
  loggedin: () => {
    loggedin()
    .then(response => {
      console.log(response.data)
    })
  },
  logout: () => {
    logout()
    .then(response => {
      setState(state => ({...state, message: response.data}))
    })
  }
})

export default useAppAuthState