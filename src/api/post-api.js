import axios from './axios'

export const editPostApi = (editInput) => axios.post('/post/edit', editInput)
export const postApi = (postInput, endpoint) =>
  axios.post(`${endpoint}`, postInput)
export const addAvatarApi = (postInput) =>
  axios.post('/product/avatar', postInput)
export const addHatApi = (postInput) => axios.post('/product/hat', postInput)

export const getPostApi = () => axios.get('/product/drink')
export const getAvatarApi = () => axios.get('/product/avatar')
export const gethatApi = () => axios.get('/product/hat')
export const deletePostApi = (id) => axios.delete(`/post/${id}`)
