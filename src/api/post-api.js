import axios from './axios'

const configWithAuthorization = {
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('accessItem'),
  },
}

export const editPostApi = (editInput) => axios.post('/post/edit', editInput)
export const postApi = (postInput, endpoint) =>
  axios.post(endpoint, postInput, {
    // headers: { 'Content-Type': 'multipart/form-data' },
  })

export const getDrinkByUserId = () =>
  axios.get('product/userDrink', configWithAuthorization)

export const getHatByUserId = () =>
  axios.get('product/userHat', configWithAuthorization)

export const getAvatarByUserId = () =>
  axios.get('product/userAvatar', configWithAuthorization)
export const getPostApi = () => axios.get('/product/drink')
export const getAvatarApi = () => axios.get('/product/avatar')
export const gethatApi = () => axios.get('/product/hat')
export const deletePostApi = (id) => axios.delete(`/post/${id}`)


//Add productByUser ไปหาวิธีส่งTokenไปหลังบ้าน
export const addHatByUserId = (input) => axios.post('product/userHat',input)
export const addDrinkByUserId = (input) => axios.post('product/userDrink',input)
export const addAvatarByUserId = (input) => axios.post('product/userAvatar',input)



