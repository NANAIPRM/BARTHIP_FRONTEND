import axios from 'axios'

const bartripApi = axios.create({
  baseURL: 'http://localhost:8080',
})
const addToken = (token) => (

  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

)

// Auth

export const login = (input) => {
  return bartripApi.post('/auth/login', input)
}
export const getMe = (token) => {
  return bartripApi.get('/auth/getme', addToken(token))
}

// ChatContainer
export const getMessage = (id) => {
  return bartripApi.get(`/messages/${id}`)
}
export const createMessage = (input, id) => {
  return bartripApi.post(`/messages/${id}`,input)
}