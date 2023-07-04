import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'
import { IiBuyitem, IiHead } from '../../../icons'
import * as productService from '../../../api/post-api'
import * as paymentService from '../../../api/payment-api'

function ShopPageContainer() {
  const { user } = useContext(AuthContext)
  const [hat, setHat] = useState([])
  const [drink, setDrink] = useState([])
  const [avatar, setAvatar] = useState([])



  const handleClickPayment = async (id) => {
    const response = await paymentService.payment({ id })
    window.location.replace(response.data.url)
  }
  // ปุ่มกดซื้อProduct
  const hdlBuyHat = async (idx) => {
    try {
      await productService.addHatByUserId({ hatId: hat[idx].id, status:"Paid" })
      const rs = await productService.getHatApi()
      setHat(rs.data)
      handleClickPayment(hat[idx].apiId)
      console.log(hat[idx].apiId)
    } catch (err) {
      console.log(err)
    }
  }

  const hdlBuyDrink = async (idx) => {
    try {
      await productService.addDrinkByUserId({ drinkId: drink[idx].id, status:"Paid" })
      const rs = await productService.getPostApi()
      setDrink(rs.data)
      // handleClickPayment(id)
    } catch (err) {
      console.log(err)
    }
  }

  const hdlBuyAvatar = async (idx) => {
    try {
      await productService.addAvatarByUserId({ avatarId: avatar[idx].id, status:"Paid" })
      const rs = await productService.getAvatarApi()
      setAvatar(rs.data)
      // handleClickPayment(id)
    } catch (err) {
      console.log(err)
    }
  }
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hatResponse = await productService.getHatApi()
        console.log(hatResponse.data)
        setHat(hatResponse.data)

        const drinkResponse = await productService.getPostApi()
        setDrink(drinkResponse.data)

        const avatarResponse = await productService.getAvatarApi()
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
                {console.log(hat)}
                <img src="src/assets/iBoxbuy.svg" alt="Buybox" />
                <div className="w-30 py-2 px-10 absolute top-5">
                  <img src={el.image} className="w-[60px]" />
                </div>
                <div>{el.name}</div>
                <div>{el.description}</div>
                <div>ราคา {el.price} บาท</div>
                {el.UserHats.find(o => o.userId == user?.id) ? (
                  <IiHead className="w-20" />
                ) : (
                  <button
                    className="w-20 cursor-pointer "
                    onClick={(e) => {
                      hdlBuyHat(idx, e.target.apiId)

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
                {el.UserDrinks.find(o => o.userId == user?.id) ? (
                  <IiHead className="w-20" />
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
                {el.UserAvatars.find(o => o.userId == user?.id) ? (
                  <IiHead className="w-20" />
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
