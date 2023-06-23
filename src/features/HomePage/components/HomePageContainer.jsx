import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { DrinkContext } from '../../../context/DrinkContextComponent'

import { IiBoy, IiEdit, IiLogo, IiShopping } from '../../../icons'

import JoinChatContainer from '../../ChatroomPage/components/JoinChatContainer'
import DrinkBar from './DrinkBar'

export default function Home() {
  const { allDrinks, userDrink, setUserDrink } = useContext(DrinkContext)
  function ChooseDrink(item) {
    setUserDrink(item)
  }

  return (
    <>
      <div className="flex justify-center items-center py-14 lg:py-0 px-0 mb-6">
        <div className="max-w-7xl w-full mt-7  mx-auto">
          <div className="flex justify-center mb-3 relative">
            <IiLogo className="w-40 " />
          </div>
          <div className="flex max-w-5xl flex-col lg:flex-row w-full mx-auto">
            <div className=" w-full flex flex-col justify-center px-0 sm:px-10 relative mb-4">
              <div className="max-w-[450px] mx-auto">
                <div className="flex w-full justify-center lg:justify-start item-center">
                  <p className="text-3xl mr-2 ">สวัสดี...</p>
                  <input
                    type="text"
                    placeholder="บอกชื่อเราหน่อยนะ"
                    maxLength="20"
                    autoComplete="off"
                    className="bg-transparent max-w-[270px] text-3xl focus:ring-transparent ring-offset-transparent border-hidden "
                  />
                  <button>
                    <IiEdit className="w-[38px] h-[38px] mx-1" />
                  </button>
                </div>
                <div className="rounded-2xl shadow-lg py-4 px-6 text-center mt-6">
                  <p className="text-xl">เลือกเครื่องดื่มที่บ่งบอกตัวคุณ</p>
                  <div className="grid grid-rows-1 grid-flow-col w-80 sm:w-96 mx-auto lg:w-[400px] overflow-x-scroll">
                    {allDrinks.map((el, idx) => (
                      <DrinkBar
                        key={idx}
                        item={el}
                        onClick={() => ChooseDrink(el)}
                      />
                    ))}
                  </div>
                </div>
                <div className="px-3 py-3">
                  <p className="text-xl underline">{userDrink.name}</p>
                  <p className="mt-2">{userDrink.desciption}</p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://drinksonme.live/counter-page/counter.png"
                  alt="counter"
                  className="relative top-36 "
                />
                <div>
                  <div className="relative w-24 top-14 mx-auto self-end  ">
                    <IiBoy className="w-24" />
                  </div>
                  <div className="relative w-24 -top-8 right-5 mx-auto self-end  ">
                    <img
                      src={userDrink.image}
                      alt={userDrink.name}
                      className="absolute top-0 w-[40px] "
                    />
                  </div>
                </div>
                <Link to="/shop" className="absolute bottom-5 right-4 ">
                  <IiShopping className="w-28" />
                </Link>
              </div>
            </div>
            <JoinChatContainer />
          </div>
        </div>
      </div>
    </>
  )
}
