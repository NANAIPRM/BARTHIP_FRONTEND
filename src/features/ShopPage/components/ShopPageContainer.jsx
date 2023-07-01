import React from 'react'
// import BuyCard from '../../../components/buyCard'
// import Random from '../../../layouts/Modals/Random'
import { useContext } from 'react'
import { DrinkContext } from '../../../contexts/DrinkContextComponent'
import { AvatarContext } from '../../../contexts/AvatarContextComponents'
import { HatContext } from '../../../contexts/HatContextComponet'
// import { IiBuyitem, IiMilktea } from ''

import { addHatByUserId } from '../../../api/post-api'


function ShopPageContainer() {
  const { allDrinks } = useContext(DrinkContext)
  const { Avatar } = useContext(AvatarContext)
  const { hat, setHat } = useContext(HatContext)




  const hdlAddHat = idx => {
    const list = [...hat]
    list.splice(idx, 1)
    setHat(list)
    addHatByUserId({ hatId: hat[idx].id, }).then(rs => {
      console.log(rs)
    })
  }

  const hdlAddAvartar = idx => {
    addHatByUserId({ hatId: hat[idx].id, }).then(rs => {
      console.log(rs)
    })
  }

  const hdlAddDrink = idx => {
    addHatByUserId({ hatId: hat[idx].id, }).then(rs => {
      console.log(rs)
    })
  }
  return (
    <>
      <div className="h-full flex flex-col justify-center items-center bg-gray-400">
        <div className="flex flex-wrap w-[70%] bg--300 justify-center">
          <h1 className="w-full m-4 font-semibold text-2xl">Avatar</h1>
          {Avatar.map((el, idx) => (
            <>
              <div className="flex flex-col justify-center items-center relative w-40 gap-4" key={idx}>
                <img src="src/assets/iBoxbuy.svg" alt="Buybox" />
                <div className="w-30 py-2 px-10 absolute top-5">
                  {/* <IiMilktea /> */}
                  <img src={el.image} className="w-[60px]" />
                </div>
                <div>{el.name}</div>
                <div>ราคา {el.price} บาท</div>
                <button className="w-20 cursor-pointer" onClick={() => { hdlAddAvartar(idx) }}>
                  ซื้อ
                </button>
              </div>
            </>
          ))}
        </div>
        <div className="flex flex-wrap w-[70%] bg--300 justify-center">
          <h1 className="w-full m-4 font-semibold text-2xl">Drink</h1>
          {allDrinks.map((el, idx) => (

            <>
              <div className="flex flex-col justify-center items-center relative w-40 gap-4" key={idx}>
                <img src="src/assets/iBoxbuy.svg" alt="Buybox" />
                <div className="w-30 py-2 px-10 absolute top-5">
                  {/* <IiMilktea /> */}
                  <img src={el.image} className="w-[60px]" />
                </div>
                <div>{el.name}</div>
                <div>ราคา {el.price} บาท</div>
                <button className="w-20 cursor-pointer" onClick={() => { hdlAddDrink(idx) }}>
                  ซื้อ
                </button>
              </div>
            </>
          ))}
        </div>
        <div className="flex flex-wrap w-[70%] bg--300 justify-center">
          <h1 className="w-full m-4 font-semibold text-2xl">Hat</h1>
          {hat.map((el, idx) => (

            <>
              <div className="flex flex-col justify-center items-center relative w-40 gap-4" key={idx}>
                <img src="src/assets/iBoxbuy.svg" alt="Buybox" />
                <div className="w-30 py-2 px-10 absolute top-5">
                  {/* <IiMilktea /> */}
                  <img src={el.image} className="w-[60px]" />
                </div>
                <div>{el.name}</div>
                <div>ราคา {el.price} บาท</div>
                <button className="w-20 cursor-pointer" onClick={() => { hdlAddHat(idx) }}>
                  ซื้อ
                </button>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default ShopPageContainer




