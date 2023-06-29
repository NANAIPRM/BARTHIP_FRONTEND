import axios from './axios'

export const payment = (id) => axios.post('/order/checkout', id)
export const paymentData = (idSession) => {
  console.log(idSession)
  return axios.get('/order/payment?session_id=' + idSession)
}
export const savePayment = (payload) => {
  return axios.post('/order/save-payment', payload)
}
