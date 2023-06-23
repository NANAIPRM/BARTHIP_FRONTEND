import { IiBuyitem, IiMilktea } from '../icons'

export default function BuyCard({ image, name, price }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-40 gap-4">
        <img src="src/assets/iBoxbuy.svg" alt="Buybox" />
        <div className="w-30 py-2 px-10 absolute top-5 bottom-5">
          <IiMilktea />
          {image}
        </div>
        <div>{name}</div>
        <div>ราคา {price} บาท</div>
        <button className="w-20">
          <IiBuyitem />
        </button>
      </div>
    </>
  )
}
