import { IiBuyitem, IiMilktea } from '../icons'
import * as paymentService from '../api/payment-api'

export default function BuyCard({ image, name, price, desciption, id }) {
  const handleClickPayment = async (id) => {
    console.log(id)
    const response = await paymentService.payment({ id })
    console.log(response.data.url)
    window.location.replace(response.data.url)
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-40 gap-4">
        <img src="src/assets/iBoxbuy.svg" alt="Buybox" />
        <div className="w-30 py-2 px-10 absolute top-5">
          {/* <IiMilktea /> */}
          <img src={image} className="w-[60px]" />
        </div>
        <div>{name}</div>
        <div>{desciption}</div>
        <div>ราคา {price} บาท</div>
        <button
          className="w-20 cursor-pointer"
          onClick={(e) => handleClickPayment(e.target.id)}
        >
          <IiBuyitem id={id} />
        </button>
      </div>
    </>
  )
}
