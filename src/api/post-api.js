import axios from './axios'

export const editPostApi = (editInput) => axios.post('/post/edit', editInput)
export const postApi = (postInput, endpoint) =>
  axios.post(endpoint, postInput, {
    // headers: { 'Content-Type': 'multipart/form-data' },
  })

export const getPostApi = () => axios.get('/product/drink')
export const getAvatarApi = () => axios.get('/product/avatar')
export const gethatApi = () => axios.get('/product/hat')
export const deletePostApi = (id) => axios.delete(`/post/${id}`)
