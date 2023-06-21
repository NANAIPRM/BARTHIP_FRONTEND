import Button from '../../../components/button'
import Footer from '../../../layouts/Footer'
export default function Home() {
    return (
        <>
            <div className="flex justify-center items-center py-14 lg:py-0 px-0 mb-6">
                <div className="max-w-7xl w-full mt-7  mx-auto">
                    <div className="flex justify-center mb-3 relative">
                        <img
                            className="w-52 "
                            src="https://drinksonme.live/logo.png"
                            alt="Drinks On Me"
                        />
                    </div>
                    <div className="flex max-w-5xl flex-col lg:flex-row w-full mx-auto">
                        <div className=" w-full flex flex-col justify-center px-0 sm:px-10 relative mb-4">
                            <div className="max-w-[450px] mx-auto">
                                <div className="flex w-full justify-center lg:justify-start item-center">
                                    <p className="text-3xl mr-2 ">สวัสดี...</p>
                                    <input
                                        type="text"
                                        placeholder="บอกชื่อเราหน่อยนะ"
                                        maxLength="20"
                                        autoComplete="off"
                                        className="bg-transparent max-w-[270px] text-3xl focus:ring-transparent ring-offset-transparent border-hidden   "
                                    />
                                    <button>
                                        <img
                                            className="w-[38px] h-[38px] mx-1"
                                            src="src/assets/iEdit.svg"
                                            alt="pencil"
                                        />
                                    </button>
                                </div>
                                <div className="rounded-2xl shadow-lg py-4 px-6 text-center mt-6">
                                    <p className="text-xl">
                                        เลือกเครื่องดื่มที่บ่งบอกตัวคุณ
                                    </p>
                                    <div className="grid grid-rows-1 grid-flow-col w-80 sm:w-96 mx-auto lg:w-[400px] overflow-x-scroll">
                                        <img
                                            src="src/assets/iBeer.svg"
                                            alt="drink"
                                            className="w-[40px] h-[52px] py-1"
                                        />
                                        <img
                                            src="src/assets/iRedwine.svg"
                                            alt="drink"
                                            className="w-[40px] h-[52px] py-1"
                                        />
                                        <img
                                            src="src/assets/iCherry.svg"
                                            alt="drink"
                                            className="w-[40px] h-[52px] py-1"
                                        />
                                        <img
                                            src="src/assets/iLemon.svg"
                                            alt="drink"
                                            className="w-[40px] h-[52px] py-1"
                                        />
                                        <img
                                            src="src/assets/iOntherock.svg"
                                            alt="drink"
                                            className="w-[40px] h-[52px] py-1"
                                        />
                                        <img
                                            src="src/assets/iPineapple.svg"
                                            alt="drink"
                                            className="w-[40px] h-[52px] py-1"
                                        />
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
                                    className="relative top-36 "
                                />
                                <div>
                                    <div className="relative w-24 top-14 mx-auto self-end  ">
                                        <img
                                            className="w-24"
                                            src="src/assets/iBoy.svg"
                                            alt="boy"
                                        />
                                    </div>
                                    <div className="relative w-24 -top-8 right-5 mx-auto self-end  ">
                                        <img
                                            src="src/assets/iBeer.svg"
                                            alt="beer"
                                            className="w-[40px] "
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

                        <div className="bg-yellow-300  mx-auto relative rounded-md">
                            <div className="flex justify-center mt-0 lg:mt-4">
                                <p className="text-xl">72 Users are Online</p>
                            </div>
                            <div className=" justify-center mt-0 lg:mt-4">
                                {/* <img
                                    className="-z-1 absolute "
                                    src="src/assets/iChatBox.svg"
                                    alt="chatbox"
                                /> */}
                                <div className="px-8 py-2">
                                    <p className="mt-3 text-xl px-4">
                                        อยากทำอะไร
                                    </p>
                                    <img
                                        src="https://ikuzbipnfkbymlctljcv.supabase.co/storage/v1/object/public/public-web-app/images/lobby/chatbox-greet.png"
                                        alt="ิbartender"
                                    />

                                    <Button text="แรนด้อมไปคุยกับเพื่อนใหม่" />
                                    <Button text="สร้างห้องใหม่คุยกับเพื่อน" />

                                    <div className="flex justify-center">
                                        <p className="font-semibold">หรือ</p>
                                    </div>
                                    <div className="flex mt-5">
                                        <div className="cursor-pointer flex justify-center items-center w-full py-2 px-4">
                                            <img
                                                src="src/assets/iMessageBox.svg"
                                                alt="chatbox"
                                                className="w-full "
                                            />
                                            <div className="w-full py-6 px-16 absolute flex">
                                                <input
                                                    type="text"
                                                    placeholder="ใส่รหัสโต๊ะ..."
                                                    className="w-full"
                                                />
                                                <button className=" border-2 border-black w-16 rounded-md">
                                                    จอย
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:flex w-[400px] mx-auto mb-8">
                                <div className="text-center text-sm mx-auto">
                                    <p>
                                        *มือถืออาจมีข้อจำกัดทาง Browser
                                        แนะนำให้เล่นในคอม
                                    </p>
                                    <p>
                                        แจ้งปัญหาหรือตามหาเพื่อนที่หายไปได้ที่
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
