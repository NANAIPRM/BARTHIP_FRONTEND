import React from 'react'
import BuyCard from '../../../components/buyCard'

import { useContext } from 'react'
import { DrinkContext } from '../../../contexts/DrinkContextComponent'
import { IiBoy } from '../../../icons'

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
      price: 30,
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
    <div className="flex flex-col justify-center items-center">
      <div className="flex w-36 mt-10">
        <IiBoy />
      </div>
      <div>
        {' '}
        <p className="text-xl underline">Drinks</p>
        <div className="flex w-[100%]">
          {product.map((el, id) => (
            <BuyCard
              image={el.image}
              name={el.name}
              price={el.price}
              key={id}
            />
          ))}
        </div>
      </div>
      <br />
      <div>
        {' '}
        <p className="text-xl underline">Hats</p>
        <div className="flex w-[100%]">
          {product.map((el, id) => (
            <BuyCard
              image={el.image}
              name={el.name}
              price={el.price}
              key={id}
            />
          ))}
        </div>
      </div>
      <br />

      <div>
        {' '}
        <p className="text-xl underline">Avatars</p>
        <div className="flex w-[100%]">
          {product.map((el, id) => (
            <BuyCard
              image={el.image}
              name={el.name}
              price={el.price}
              key={id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShopPageContainer
