import React from 'react'
import { DrinkContext } from '../../../contexts/DrinkContextComponent'
import { useContext } from 'react'
import { AvatarContext } from '../../../contexts/AvatarContextComponents'
import { HatContext } from '../../../contexts/HatContextComponet'
export default function AdminAllProduct() {
  const { allDrinks } = useContext(DrinkContext)
  const { Avatar } = useContext(AvatarContext)
  const { hat } = useContext(HatContext)
  return (
    <div className="border-solid border-2 border-black">
      <div className="w-full grid grid-cols-6  text-center p-4">
        <p className=" font-semibold">Image</p>
        <p className=" font-semibold">Name</p>
        <p className=" font-semibold">Desciption</p>
        <p className=" font-semibold">Price</p>
      </div>
      <div className="text-2xl">Drinks</div>
      <div className="w-full  bg-yellow-300 text-center p-4">
        {allDrinks?.map((el, id) => (
          <div className="grid grid-cols-6 m-4 items-center">
            <div className="flex justify-center">
              <img src={el.image} alt="" className="w-[50px] h-[50px]  " />
            </div>
            <div>{el.name}</div>
            <div>{el.desciption}</div>
            <div>{el.price}</div>
            <button className="bg-green-300">Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
      <div className="text-2xl">Avatars</div>
      <div className="w-full  bg-blue-300 text-center p-4">
        {Avatar?.map((el, id) => (
          <div className="grid grid-cols-6 m-4 items-center">
            <div className="flex justify-center">
              <img src={el.image} alt="" className="w-[50px] h-[50px]  " />
            </div>
            <div>{el.name}</div>
            <div>{el.desciption}</div>
            <div>{el.price}</div>
            <button className="bg-green-300">Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
      <div className="text-2xl">Hats</div>
      <div className="w-full  bg-pink-300 text-center p-4">
        {hat?.map((el, id) => (
          <div className="grid grid-cols-6 m-4 items-center">
            <div className="flex justify-center">
              <img src={el.image} alt="" className="w-[50px] h-[50px]  " />
            </div>
            <div>{el.name}</div>
            <div>{el.desciption}</div>
            <div>{el.price}</div>
            <button className="bg-green-300">Edit</button>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}
