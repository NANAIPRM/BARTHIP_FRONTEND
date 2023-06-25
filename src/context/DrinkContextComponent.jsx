import React, { createContext, useEffect, useState } from 'react'

const DrinkContext = createContext()

function DrinkContextComponent({ children }) {
  const drinks = [
    {
      name: 'Beer',
      desciption: 'รู้สึกคอแห้ง เยี่ยวแตกก็ไม่เป็นไร',
      image: 'public/assets/iBeer.svg',
    },
    {
      name: 'Red wine',
      desciption: 'ลงรูปดื่มไวน์ ชีวิตจริงแดกเอ็มร้อย',
      image: 'src/assets/iRedwine.svg',
    },
    {
      name: 'Midori Sour',
      desciption: 'เปรี้ยวจี๊ด ปี๊ดซ่า',
      image: 'src/assets/iCherry.svg',
    },
    {
      name: 'Magarita',
      desciption: 'ซิญญอริต้า มาการิต้้า กิกี้กาก้า',
      image: 'src/assets/iLemon.svg',
    },
    {
      name: 'Ontherock',
      desciption: 'ออนเดอะล็อค น็อคเดอะสเตจ',
      image: 'src/assets/iOntherock.svg',
    },

    {
      name: 'Blue Hawaii',
      desciption: 'บลูฮาวาย จบ',
      image: 'src/assets/iPineapple.svg',
    },
  ]
  const [allDrinks, setDrinks] = useState([])
  const [userDrink, setUserDrink] = useState(drinks[0])
  useEffect(() => {
    setDrinks(drinks)
  }, [])
  return (
    <DrinkContext.Provider value={{ allDrinks, userDrink, setUserDrink }}>
      {children}
    </DrinkContext.Provider>
  )
}
export { DrinkContext }
export default DrinkContextComponent