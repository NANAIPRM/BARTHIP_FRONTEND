import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'
import { IiBuyitem, IiFace } from '../../../icons'
import { addHatByUserId, addAvatarByUserId, addDrinkByUserId, getHatApi, getPostApi, getAvatarApi } from '../../../api/post-api'


function ShopPageContainer() {
  const { user } = useContext(AuthContext)
  const [hat, setHat] = useState([])
  const [drink, setDrink] = useState([])
  const [avatar, setAvatar] = useState([])


  // ปุ่มกดซื้อProduct
  const hdlBuyHat = async (idx) => {
    await addHatByUserId({ hatId: hat[idx].id });
    const rs = await getHatApi();
    setHat(rs.data);
  };

  const hdlBuyDrink = async (idx) => {
    await addDrinkByUserId({ drinkId: drink[idx].id });
    const rs = await getPostApi();
    setDrink(rs.data);
  };

  const hdlBuyAvatar = async (idx) => {
    await addAvatarByUserId({ avatarId: avatar[idx].id });
    const rs = await getAvatarApi();
    setAvatar(rs.data);
  };

  
  useEffect(() => {
    getHatApi().then(rs => {
      setHat(rs.data)
    })
    getPostApi().then(rs => {
      setDrink(rs.data)
    })
    getAvatarApi().then(rs => {
      setAvatar(rs.data)
    })
  }, [])



  return (
    <>
      <div className="h-full flex flex-col justify-center items-center bg-gray-400">



      
        <div className="flex flex-wrap w-[70%] bg--300 justify-center">
          <h1 className="w-full m-4 font-semibold text-2xl flex justify-center">Hat</h1>
          {hat.map((el, idx) => (
            <>
              <div className="flex flex-col justify-center items-center relative w-40 gap-4" key={idx}>
                <img src="src/assets/iBoxbuy.svg" alt="Buybox" />
                <div className="w-30 py-2 px-10 absolute top-5">
                  <img src={el.image} className="w-[60px]" />
                </div>
                <div>{el.name}</div>
                <div>{el.description}</div>
                <div>ราคา {el.price} บาท</div>
                {el.UserHats[0]?.userId == user?.id ? <IiFace /> : <button className="w-20 cursor-pointer " onClick={() => { hdlBuyHat(idx) }}>
                  <IiBuyitem />
                </button>}
              </div>
            </>
          ))}
        </div>

        <div className="flex flex-wrap w-[70%] bg--300 justify-center">
          <h1 className="w-full m-4 font-semibold text-2xl flex justify-center">Drink</h1>
          {drink.map((el, idx) => (
            <>
              <div className="flex flex-col justify-center items-center relative w-40 gap-4" key={idx}>
                <img src="src/assets/iBoxbuy.svg" alt="Buybox" />
                <div className="w-30 py-2 px-10 absolute top-5">
                  <img src={el.image} className="w-[60px]" />
                </div>
                <div>{el.name}</div>
                <div>{el.description}</div>
                <div>ราคา {el.price} บาท</div>
                {el.UserDrinks[0]?.userId == user?.id ? <IiFace /> : <button className="w-20 cursor-pointer " onClick={() => { hdlBuyDrink(idx) }}>
                  <IiBuyitem />
                </button>}
              </div>
            </>
          ))}
        </div>

        <div className="flex flex-wrap w-[70%] bg--300 justify-center">
          <h1 className="w-full m-4 font-semibold text-2xl flex justify-center">Avatar</h1>
          {avatar.map((el, idx) => (
            <>
              <div className="flex flex-col justify-center items-center relative w-40 gap-4" key={idx}>
                <img src="src/assets/iBoxbuy.svg" alt="Buybox" />
                <div className="w-30 py-2 px-10 absolute top-5">
                  <img src={el.image} className="w-[60px]" />
                </div>
                <div>{el.name}</div>
                <div>{el.description}</div>
                <div>ราคา {el.price} บาท</div>
                {el.UserAvatars[0]?.userId == user?.id ? <IiFace /> : <button className="w-20 cursor-pointer " onClick={() => { hdlBuyAvatar(idx) }}>
                  <IiBuyitem />
                </button>}
              </div>
            </>
          ))}
        </div>





      </div>
    </>




  )
}

export default ShopPageContainer










