import React from 'react'
import * as paymentService from '../../../api/payment-api'

function PaymentPageContainer() {
  const handleClickPayment = async (id) => {
    console.log(id)
    const response = await paymentService.payment({ id })
    console.log(response.data.url)
    window.location.replace(response.data.url)
  }

  return (
    <div className="flex flex-col mt-96 justify-between gap-10 items-center ">
      <h1>Hello this is Payment</h1>
      <a
        className="btn"
        id="price_1NNW6jKltfnBEaa83W2brfnI"
        onClick={(e) => handleClickPayment(e.target.id)}
      >
        จิ้มหนูเลย
      </a>
    </div>
  )
}

export default PaymentPageContainer
