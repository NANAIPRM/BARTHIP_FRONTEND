import React, { createContext, useEffect, useState } from 'react'
import { getPostApi, getDrinkByUserId } from '../api/post-api'

const DrinkContext = createContext()

function DrinkContextComponent({ children }) {
  const defalutDrinks = [
    {
      name: 'Beer',
      description: 'รู้สึกคอแห้ง เยี่ยวแตกก็ไม่เป็นไร',
      image: 'public/assets/iBeer.svg',
    },
    {
      name: 'Red wine',
      description: 'ลงรูปดื่มไวน์ ชีวิตจริงแดกเอ็มร้อย',
      image: 'src/assets/iRedwine.svg',
    },
    {
      name: 'Midori Sour',
      description: 'เปรี้ยวจี๊ด ปี๊ดซ่า',
      image: 'src/assets/iCherry.svg',
    },
    {
      name: 'Magarita',
      description: 'ซิญญอริต้า มาการิต้้า กิกี้กาก้า',
      image: 'src/assets/iLemon.svg',
    },
    {
      name: 'Ontherock',
      description: 'ออนเดอะล็อค น็อคเดอะสเตจ',
      image: 'src/assets/iOntherock.svg',
    },

    {
      name: 'Blue Hawaii',
      description: 'บลูฮาวาย จบ',
      image: 'src/assets/iPineapple.svg',
    },
  ]
  const [allDrinks, setDrinks] = useState([])
  const [userDrink, setUserDrink] = useState([])
  const [drinksOfUser, setDrinksOfUser] = useState([])
  // console.log(allDrinks)

  const getDrinks = async () => {
    const res = await getPostApi()

    setDrinks(res.data.drinks)
  }

  const getDrinksByUserId = async () => {
    const res = await getDrinkByUserId()
    setDrinksOfUser(res.data.drinks)
  }

  useEffect(() => {
    getDrinks()
    getDrinksByUserId()
  }, [])

  return (
    <DrinkContext.Provider
      value={{
        allDrinks,
        userDrink,
        setUserDrink,
        getDrinks,
        defalutDrinks,
        drinksOfUser,
      }}
    >
      {children}
    </DrinkContext.Provider>
  )
}
export { DrinkContext }
export default DrinkContextComponent
