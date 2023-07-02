import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'
import { IiBought, IiBuyitem, IiFace } from '../../../icons'
import {
  addHatByUserId,
  addAvatarByUserId,
  addDrinkByUserId,
  getHatApi,
  getPostApi,
  getAvatarApi,
} from '../../../api/post-api'
import * as paymentService from '../../../api/payment-api'

function ShopPageContainer() {
  const { user } = useContext(AuthContext)
  const [hat, setHat] = useState([])
  const [drink, setDrink] = useState([])
  const [avatar, setAvatar] = useState([])

  // ปุ่มกดซื้อProduct
  const hdlBuyHat = async (idx, id) => {
    try {
      // console.log(hat[idx].id, 1)
      await addHatByUserId({ hatId: hat[idx].id })
      // console.log('3')
      const rs = await getHatApi()
      // console.log('2')
      setHat(rs.data)
      handleClickPayment(id)
    } catch (err) {
      console.log(err)
    }
  }

  const hdlBuyDrink = async (idx, id) => {
    try {
      await addDrinkByUserId({ drinkId: drink[idx].id })
      const rs = await getPostApi()
      setDrink(rs.data)
      handleClickPayment(id)
    } catch (err) {
      console.log(err)
    }
  }

  const hdlBuyAvatar = async (idx, id) => {
    try {
      await addAvatarByUserId({ avatarId: avatar[idx].id })
      const rs = await getAvatarApi()
      setAvatar(rs.data)
      handleClickPayment(id)
    } catch (err) {
      console.log(err)
    }
  }
  const handleClickPayment = async (id) => {
    // console.log(id)
    const response = await paymentService.payment({ id })
    // console.log(response.data.url)
    window.location.replace(response.data.url)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hatResponse = await getHatApi()
        setHat(hatResponse.data)

        const drinkResponse = await getPostApi()
        setDrink(drinkResponse.data)

        const avatarResponse = await getAvatarApi()
        setAvatar(avatarResponse.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <div className="h-full flex flex-col justify-center items-center bg-gray-400">
        <div className="flex flex-wrap w-[70%] bg--300 justify-center">
          <h1 className="w-full m-4 font-semibold text-2xl flex justify-center">
            Hat
          </h1>
          {hat.map((el, idx) => (
            <>
              <div
                className="flex flex-col justify-center items-center relative w-40 gap-4"
                key={idx}
              >
                <img src="src/assets/iBoxbuy.svg" alt="Buybox" />
                <div className="w-30 py-2 px-10 absolute top-5">
                  <img src={el.image} className="w-[60px]" />
                </div>
                <div>{el.name}</div>
                <div>{el.description}</div>
                <div>ราคา {el.price} บาท</div>
                {el.UserHats[0]?.userId == user?.id ? (
                  <IiBought className="w-20" />
                ) : (
                  <button
                    className="w-20 cursor-pointer "
                    onClick={(e) => {
                      hdlBuyHat(idx, e.target.id)
                      console.log(el.apiId)
                    }}
                  >
                    <IiBuyitem id={el.apiId} />
                  </button>
                )}
              </div>
            </>
          ))}
        </div>

        <div className="flex flex-wrap w-[70%] bg--300 justify-center">
          <h1 className="w-full m-4 font-semibold text-2xl flex justify-center">
            Drink
          </h1>
          {drink.map((el, idx) => (
            <>
              <div
                className="flex flex-col items-center relative w-40 gap-4"
                key={idx}
              >
                <div className="relative">
                  <img src="src/assets/iBoxbuy.svg" alt="Buybox" />
                  <div className="w-30 py-2 px-10 absolute top-5 left-2">
                    <img src={el.image} className="w-[60px]" />
                  </div>
                </div>

                <div>{el.name}</div>
                <div>{el.description}</div>
                <div>ราคา {el.price} บาท</div>
                {el.UserDrinks[0]?.userId == user?.id ? (
                  <IiBought className="w-20" />
                ) : (
                  <button
                    className="w-20 cursor-pointer "
                    onClick={(e) => {
                      hdlBuyDrink(idx, e.target.id)
                    }}
                  >
                    <IiBuyitem id={el.apiId} />
                  </button>
                )}
              </div>
            </>
          ))}
        </div>

        <div className="flex flex-wrap w-[70%] bg--300 justify-center">
          <h1 className="w-full m-4 font-semibold text-2xl flex justify-center">
            Avatar
          </h1>
          {avatar.map((el, idx) => (
            <>
              <div
                className="flex flex-col items-center relative w-40 gap-4"
                key={idx}
              >
                <img src="src/assets/iBoxbuy.svg" alt="Buybox" />
                <div className="w-30 py-2 px-10 absolute top-5">
                  <img src={el.image} className="w-[60px]" />
                </div>
                <div>{el.name}</div>
                <div>{el.description}</div>
                <div>ราคา {el.price} บาท</div>
                {el.UserAvatars[0]?.userId == user?.id ? (
                  <IiBought className="w-20" />
                ) : (
                  <button
                    className="w-20 cursor-pointer "
                    onClick={(e) => {
                      hdlBuyAvatar(idx, e.target.id)
                    }}
                  >
                    <IiBuyitem id={el.apiId} />
                  </button>
                )}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default ShopPageContainer
