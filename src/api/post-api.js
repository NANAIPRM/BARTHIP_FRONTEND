import axios from './axios'

export const editPostApi = (editInput) => axios.post('/post/edit', editInput)
export const postApi = (postInput) =>
  axios.post('/product/drink', postInput, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })

export const getPostApi = () => axios.get('/product/drink')
export const deletePostApi = (id) => axios.delete(`/post/${id}`)
