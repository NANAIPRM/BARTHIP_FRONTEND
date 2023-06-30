import React from 'react'
import BuyCard from '../../../components/buyCard'
import Random from '../../../layouts/Modals/Random'
import { useContext } from 'react'
import { DrinkContext } from '../../../contexts/DrinkContextComponent'
import { AvatarContext } from '../../../contexts/AvatarContextComponents'
import { HatContext } from '../../../contexts/HatContextComponet'

function ShopPageContainer() {
  const { allDrinks } = useContext(DrinkContext)
  console.log(allDrinks)
  const { Avatar } = useContext(AvatarContext)
  const { hat } = useContext(HatContext)

  return (
    <>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="flex flex-wrap  bg-yellow-300 justify-center w-full mt-20">
          <h1 className="w-full m-4 font-semibold text-2xl">Drinks</h1>
          {allDrinks?.map((el, id) => (
            <BuyCard
              image={el.image}
              name={el.name}
              desciption={el.desciption}
              price={el.price}
              key={id}
            />
          ))}
        </div>
        <div className="flex flex-wrap  bg-blue-300 justify-center w-full">
          <h1 className="w-full m-4 font-semibold text-2xl">Avatar</h1>
          {Avatar.map((el, id) => (
            <BuyCard
              image={el.image}
              name={el.name}
              desciption={el.desciption}
              price={el.price}
              key={id}
            />
          ))}
        </div>
        <div className="flex flex-wrap  bg-pink-300 justify-center w-full">
          <h1 className="w-full m-4 font-semibold text-2xl">Hat</h1>
          {hat.map((el, id) => (
            <BuyCard
              image={el.image}
              name={el.name}
              desciption={el.desciption}
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
