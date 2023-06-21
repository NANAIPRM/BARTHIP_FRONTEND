
import React from 'react'
import Header from '../../../layouts/Navbar'
export default function ChatPageContainer() {
    return (
        <>
            <Header />
            <div className="flex justify-center items-center py-14 lg:py-4 px-0 bg-slate-200 ">
                <div className="max-w-7xl w-full mt-7 bg-blue-400 mx-auto">

export default function Chatroom() {
    return (
        <>
            <div className="flex justify-center items-center py-14 lg:py-4 px-0 bg-slate-200 ">
                {/* header navbar */}
                <img
                    className="w-12 fixed top-5 left-5"
                    src="https://drinksonme.live/nav/nav-home.png"
                    alt="home"
                />
                <button className="cursor-pointer flex justify-center items-center p-3 w-32 z-50 fixed top-5 left-20">
                    <p className="font-semibold">ออกจากโต๊ะ</p>
                </button>

                <div className="flex fixed top-5 right-5 z-50 cursor-pointer gap-x-1 ">
                    <img
                        className="w-12 h-12 cursor-pointer z-40"
                        src="https://drinksonme.live/boost/boost-logo.png"
                        alt="boost-logo"
                    />
                    <img
                        className="w-14 cursor-pointer z-40"
                        src="https://drinksonme.live/counter-page/sound.gif"
                        alt="music-logo"
                    />
                </div>
                {/* --------------------------- */}
                <div className="max-w-7xl w-full mt-7 bg-blue-400">

                   

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
                                    <img
                                        className="w-[38px] h-[38px] cursor-pointer"
                                        src="src/assets/iEdit.svg"
                                        alt="pencil"
                                    />
                                </div>
                                <div className="rounded-2xl shadow-lg py-4 px-6 text-center mt-6 bg-green-300">
                                    <p className="text-xl">
                                        เลือกเครื่องดื่มที่บ่งบอกตัวคุณ
                                    </p>
                                    <div className="grid grid-rows-1 grid-flow-col w-80 sm:w-96 lg:w-[400px]  ">
                                        <div className="relative cursor-pointer w-12 self-center justify-self-center">
                                            <img
                                                src="src/assets/iBeer.svg"
                                                alt="drink"
                                                className="w-[38px]"
                                            />
                                            <img
                                                className="absolute top-1 bottom-0 left-0 w-[38px]"
                                                src="src/assets/iCircle.svg"
                                                alt="circle"
                                            />
                                        </div>
                                        <div className="relative cursor-pointer w-12 self-center justify-self-center">
                                            <img
                                                src="src/assets/iBeer.svg"
                                                alt="drink"
                                                className="w-[38px]"
                                            />
                                        </div>
                                        <div className="relative cursor-pointer w-12 self-center justify-self-center">
                                            <img
                                                src="src/assets/iBeer.svg"
                                                alt="drink"
                                                className="w-[38px]"
                                            />
                                        </div>
                                        <div className="relative cursor-pointer w-12 self-center justify-self-center">
                                            <img
                                                src="src/assets/iBeer.svg"
                                                alt="drink"
                                                className="w-[38px]"
                                            />
                                        </div>
                                        <div className="relative cursor-pointer w-12 self-center justify-self-center">
                                            <img
                                                src="src/assets/iBeer.svg"
                                                alt="drink"
                                                className="w-[38px]"
                                            />
                                        </div>
                                        <div className="relative cursor-pointer w-12 self-center justify-self-center">
                                            <img
                                                src="src/assets/iBeer.svg"
                                                alt="drink"
                                                className="w-[38px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="px-3 py-3">
                                    <p className="text-xl underline">
                                        Open Mindjito
                                    </p>
                                    <p className="mt-2">
                                        รู้สึกชิวชิว สบาย ๆ พร้อมรับสิ่งใหม่ ๆ
                                        ซัพพอร์ตทุก ๆ คน
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    src="https://drinksonme.live/counter-page/counter.png"
                                    alt="counter"
                                />
                                <div>
                                    <div className="relative w-24 self-end  ">
                                        <img
                                            className="w-24"
                                            src="src/assets/iBoy.svg"
                                            alt="boy"
                                        />
                                        <img
                                            src="src/assets/iBeer.svg"
                                            alt="beer"
                                        />
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="absolute bottom-5 right-4 "
                                >
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
                                    <p className="text-lg font-semibold">
                                        แรนด้อมไปคุยกับเพื่อนใหม่
                                    </p>
                                </button>
                                <button className="cursor-pointer flex justify-center items-center w-full py-6 px-3">
                                    <p className="text-lg font-semibold ">
                                        สร้างห้องใหม่คุยกับเพื่อน
                                    </p>
                                </button>
                                <div className="flex justify-center">
                                    <p>หรือ</p>
                                </div>
                                <div className="flex mt-5 mr-2">
                                    <input
                                        type="text"
                                        placeholder="ใส่รหัสโต๊ะ..."
                                        className="w-full"
                                    />
                                    <button className=" border-2 border-black w-16 rounded-md">
                                        จอย

                            display
                        </div>
                        <div className="bg-yellow-300  mx-auto relative">
                            <div className="flex justify-between items-center mx-6 mt-0">
                                <div className="flex justify-center my-1"></div>
                                <div className="flex items-center">
                                    <div className="cursor-pointer ">icon1</div>
                                    <div className="mr-2 cursor-pointer">
                                        icon2
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="overflow-y-scroll">
                                    <div className="my-1 px-2">
                                        <p className="text-sm border rounded-lg shadow-sm bg-gray-200">
                                            "🤟 เพื่อความปลอดภัยในการใช้งาน
                                            เราขอแนะนำให้งดส่งข้อมูลส่วนตัวให้กับคนแปลกหน้า
                                            ทางเว็บขอสงวนสิทธิ์ในการรับผิดชอบใด
                                            ๆ อันเกิดจากการเปิดเผยข้อมูลส่วนตัว"
                                        </p>
                                    </div>
                                    <div className="my-1 px-2">
                                        <p className="text-sm border rounded-lg shadow-sm bg-gray-200">
                                            "👻 หากพบตัวละครที่กลายเป็นผี
                                            จะหมายถึงยูสเซอร์ที่ไม่แอคทีฟแล้ว
                                            สามารถกดปุ่มไล่ผีได้เลย !"
                                        </p>
                                    </div>
                                </div>
                                <div className="h-4 mt-2">is texting</div>
                                <div className="flex mt-5 mr-2 items-center">
                                    <input
                                        className="w-full"
                                        type="text"
                                        placeholder="คุยเลย..."
                                    />
                                    <button className="ิborder-2 border-black w-16 rounded-md">
                                        ส่ง

                                  

                </div>

                    <div className="flex justify-center">line</div>
                    <div className="flex flex-col items-center mt-3">sync</div>
                </div>
            </div>
            <div className="mt-6 lg:mt-0 mb-6">
                <p className="font-semibold text-2xl mb-2 text-center lg:text-left ">
                    Sponsors
                </p>
                <div className="flex flex-col lg:flex-row justify-evenly">
                    <div>sponsor1</div>
                    <div>sponsor2</div>
                    <div>sponsor3</div>
                </div>
                <p className="text-center lg:text-right">สนใจเป็น sponsors</p>

        
