
import axios from 'axios';
const url = 'http://localhost:5000/api';

const dataRequest = axios.create({ url, withCredentials: true });

let authService = () => {

  const signup = (data) => {
    return dataRequest.post('/signup', data)
  }
  const login = (data) => {
    return dataRequest.post('/login', data)
  }
  const logout = () => {
    return dataRequest.get('/logout')
  }

}


export default authService