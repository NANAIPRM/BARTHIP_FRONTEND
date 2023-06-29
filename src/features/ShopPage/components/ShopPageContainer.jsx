import React from 'react'
import BuyCard from '../../../components/buyCard'
import Random from '../../../layouts/Modals/Random'
import { useContext } from 'react'
import { DrinkContext } from '../../../contexts/DrinkContextComponent'
import { AvatarContext } from '../../../contexts/AvatarContextComponents'
import { HatContext } from '../../../contexts/HatContextComponet'

function ShopPageContainer() {
  const { allDrinks } = useContext(DrinkContext)
  const { Avatar } = useContext(AvatarContext)
  const { hat } = useContext(HatContext)
  const product = [
    {
      image: '',
      name: 'ชานม',
      price: 30,
    },
    {
      image: '',
      name: 'ชาไทย',
      price: 35,
    },
    {
      image: '',
      name: 'ชาเขียว',
      price: 30,
    },
    {
      image: '',
      name: 'ชาชัก',
      price: 30,
    },
  ]
  return (
    <>
      <div className="h-full flex flex-col justify-center items-center bg-gray-400">
        <div className="flex flex-wrap w-[70%] bg-yellow-300 justify-center">
          <h1 className="w-full m-4 font-semibold text-2xl">Drinks</h1>
          {allDrinks.map((el, id) => (
            <BuyCard
              image={el.image}
              name={el.name}
              price={el.price}
              key={id}
            />
          ))}
        </div>
        <div className="flex flex-wrap w-[70%] bg-blue-300 justify-center">
          <h1 className="w-full m-4 font-semibold text-2xl">Avatar</h1>
          {Avatar.map((el, id) => (
            <BuyCard
              image={el.image}
              name={el.name}
              price={el.price}
              key={id}
            />
          ))}
        </div>
        <div className="flex flex-wrap w-[70%] bg--300 justify-center">
          <h1 className="w-full m-4 font-semibold text-2xl">Hat</h1>
          {hat.map((el, id) => (
            <BuyCard
              image={el.image}
              name={el.name}
              price={el.price}
              key={id}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default ShopPageContainer
