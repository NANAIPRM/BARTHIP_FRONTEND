import React from 'react'
import BuyCard from '../../../components/buyCard'
import Random from '../../../layouts/Modals/Random'
import { useContext } from 'react'
import { DrinkContext } from '../../../contexts/DrinkContextComponent'

function ShopPageContainer() {
  const { allDrinks } = useContext(DrinkContext)
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
    <div className="h-screen flex justify-center items-center ">
      <div className="flex flex-wrap w-[70%]  ">
        {allDrinks.map((el, id) => (
          <BuyCard image={el.image} name={el.name} price={el.price} key={id} />
        ))}
      </div>
    </div>
  )
}

export default ShopPageContainer
