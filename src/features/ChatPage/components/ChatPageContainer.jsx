import React from "react";
export default function ChatPageContainer() {
  return (
    <>
      {/* header navbar */}
      <img className="w-12 fixed top-5 left-5" src="https://drinksonme.live/nav/nav-home.png" alt="home" />
      <button className="cursor-pointer flex justify-center items-center p-3 w-32 z-50 fixed top-5 left-20">
        <p className="font-semibold">ออกจากโต๊ะ</p>
      </button>

      <div className="flex fixed top-5 right-5 z-50 cursor-pointer gap-x-1 ">
        <img className="w-12 h-12 cursor-pointer z-40" src="src/assets/iBoost.svg" alt="boost-logo" />
        <img
          className="w-14 cursor-pointer z-40"
          src="https://drinksonme.live/counter-page/sound.gif"
          alt="music-logo"
        />
      </div>
      <div className="flex justify-center items-center py-14 lg:py-4 px-0 bg-slate-200 ">
        <div className="max-w-7xl w-full mt-7 bg-blue-400 mx-auto">
          <div className="flex justify-center mb-3 relative">
            <img className="w-52 " src="https://drinksonme.live/logo.png" alt="Drinks On Me" />
          </div>
          <div className="flex max-w-5xl flex-col lg:flex-row w-full bg-green-400 mx-auto">
            <div className="bg-red-300 w-full flex flex-col justify-center px-0 sm:px-10 relative ">
              <div className="max-w-[450px] mx-auto bg-stone-600">
                <div className="flex w-full justify-center lg:justify-start item-center">
                  <p className="text-3xl mr-2 ">สวัสดี...</p>
                  <input
                    type="text"
                    placeholder="บอกชื่อเราหน่อยนะ"
                    maxLength="20"
                    autoComplete="off"
                    className="bg-transparent max-w-[200px] text-3xl"
                  />
                  <img className="w-[38px] h-[38px] cursor-pointer" src="src/assets/iEdit.svg" alt="pencil" />
                </div>
                <div className="rounded-2xl shadow-lg py-4 px-6 text-center mt-6 bg-green-300">
                  <p className="text-xl">เลือกเครื่องดื่มที่บ่งบอกตัวคุณ</p>
                  <div className="grid grid-rows-1 grid-flow-col w-80 sm:w-96 lg:w-[400px]  ">
                    <div className="relative cursor-pointer w-12 self-center justify-self-center">
                      <img src="src/assets/iBeer.svg" alt="drink" className="w-[38px]" />
                      <img
                        className="absolute top-1 bottom-0 left-0 w-[38px]"
                        src="src/assets/iCircle.svg"
                        alt="circle"
                      />
                    </div>
                    <div className="relative cursor-pointer w-12 self-center justify-self-center">
                      <img src="src/assets/iBeer.svg" alt="drink" className="w-[38px]" />
                    </div>
                    <div className="relative cursor-pointer w-12 self-center justify-self-center">
                      <img src="src/assets/iBeer.svg" alt="drink" className="w-[38px]" />
                    </div>
                    <div className="relative cursor-pointer w-12 self-center justify-self-center">
                      <img src="src/assets/iBeer.svg" alt="drink" className="w-[38px]" />
                    </div>
                    <div className="relative cursor-pointer w-12 self-center justify-self-center">
                      <img src="src/assets/iBeer.svg" alt="drink" className="w-[38px]" />
                    </div>
                    <div className="relative cursor-pointer w-12 self-center justify-self-center">
                      <img src="src/assets/iBeer.svg" alt="drink" className="w-[38px]" />
                    </div>
                  </div>
                </div>
                <div className="px-3 py-3">
                  <p className="text-xl underline">Open Mindjito</p>
                  <p className="mt-2">รู้สึกชิวชิว สบาย ๆ พร้อมรับสิ่งใหม่ ๆ ซัพพอร์ตทุก ๆ คน</p>
                </div>
              </div>
              <div className="relative">
                <img src="https://drinksonme.live/counter-page/counter.png" alt="counter" />
                <div>
                  <div className="relative w-24 self-end  ">
                    <img className="w-24" src="src/assets/iBoy.svg" alt="boy" />
                    <img src="src/assets/iBeer.svg" alt="beer" />
                  </div>
                </div>
                <a href="#" className="absolute bottom-5 right-4 ">
                  <img className="w-28" src="" alt="shop" />
                </a>
              </div>
            </div>
            <div className="bg-yellow-300  mx-auto relative">
              <div className="flex justify-center mt-0 lg:mt-8">
                <p className="text-xl">72 Users are Online</p>
              </div>
              <div>
                <p className="mt-3 text-xl">อยากทำอะไร</p>
                <img
                  src="https://ikuzbipnfkbymlctljcv.supabase.co/storage/v1/object/public/public-web-app/images/lobby/chatbox-greet.png"
                  alt="ิbartender"
                />
                <button className="cursor-pointer flex justify-center items-center w-full py-6 px-4 ">
                  <p className="text-lg font-semibold">แรนด้อมไปคุยกับเพื่อนใหม่</p>
                </button>
                <button className="cursor-pointer flex justify-center items-center w-full py-6 px-3">
                  <p className="text-lg font-semibold ">สร้างห้องใหม่คุยกับเพื่อน</p>
                </button>
                <div className="flex justify-center">
                  <p>หรือ</p>
                </div>
                <div className="flex mt-5 mr-2">
                  <input type="text" placeholder="ใส่รหัสโต๊ะ..." className="w-full" />
                  <button className=" border-2 border-black w-16 rounded-md">จอย</button>
                </div>
              </div>
              <div className="hidden lg:flex lg:justify-end w-[356px] pr-4 ">suggestion text</div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

      {/* footer */}
      <footer className="py-3 flex justify-center bg-slate-300 ">
        <p>
          <span className="underline cursor-pointer ">About Us</span> |{" "}
          <span className=" underline cursor-pointer">Support Us</span>
        </p>
        <div className="flex justify-center mx-1 ">
          <a href="#" className="cursor-pointer px-1 w-9">
            <img src="https://drinksonme.live/_nuxt/img/discord.5e1a431.png" alt="discord" />
          </a>
          <a href="#" className="cursor-pointer px-1 w-9">
            <img src="https://drinksonme.live/_nuxt/img/ig.0164ff9.png" alt="instagram" />
          </a>
          <a href="#" className="cursor-pointer px-1 w-9">
            <img src="https://drinksonme.live/_nuxt/img/tiktok.210dc3e.png" alt="discord" />
          </a>
        </div>
      </footer>
    </>
  );
}
