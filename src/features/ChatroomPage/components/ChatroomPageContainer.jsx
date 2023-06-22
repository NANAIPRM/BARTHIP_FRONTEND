import Button from '../../../components/button'

export default function ChatroomPage() {
    return (
        <>
            <div className="flex justify-center lg:px-0 ">
                <div className="max-w-7xl w-full mt-7">
                    <div className="flex justify-center mb-3 relative">
                        <img
                            className="w-40"
                            src="src/assets/iLogo.svg"
                            alt="Logo"
                        />
                    </div>
                    <div className="flex max-w-5xl flex-col lg:flex-row w-full mx-auto relative">
                        <div className="left-4 top-0 flex items-center absolute">
                            <p>รหัสโต๊ะ : priv-926e</p>
                            <img
                                src="src/assets/iFace.svg"
                                className="h-5 ml-2"
                            />
                        </div>
                        <div className=" w-full flex flex-col  px-0 sm:px-10 justify-center  ">
                            <div className="mt-8">
                                <img
                                    src="src/assets/iShopping.svg"
                                    className="w-24"
                                />
                            </div>

                            <div className="relative ">
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
                            </div>

                            <div className="hidden lg:block mb-4 mt-2 text-center">
                                <p className="text-sm">
                                    👋หากไม่มีการส่งข้อความนานเกิน 5 นาที
                                    อาจโดนผู้เล่นคนอื่นเตะออกได้
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto relative">
                            <div className="flex justify-between items-center mx-6 mt-0">
                                <div className="flex justify-center my-1"></div>
                                <div className="flex items-center">
                                    <img
                                        className="h-9 mr-2"
                                        src="src/assets/iReport.svg"
                                    />
                                    <button className="mr-2">
                                        <img
                                            className="h-9"
                                            src="src/assets/iHelp.svg"
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className="py-2 relative">
                                <img
                                    src="src/assets/iChatbox.svg"
                                    className="relative w-full "
                                />
                                <div className="absolute z-20 top-6 px-10 py-2">
                                    <div className="overflow-y-scroll h-[428px] ">
                                        <div className="my-1 px-2">
                                            <p className="text-sm border rounded-lg shadow-sm bg-gray-200">
                                                "🤟 เพื่อความปลอดภัยในการใช้งาน
                                                เราขอแนะนำให้งดส่งข้อมูลส่วนตัวให้กับคนแปลกหน้า
                                                ทางเว็บขอสงวนสิทธิ์ในการรับผิดชอบใด
                                                ๆ
                                                อันเกิดจากการเปิดเผยข้อมูลส่วนตัว"
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
                                    <div className="h-4 mt-2 px-2">
                                        is texting
                                    </div>
                                    <div className="flex mt-5 mr-2 items-center">
                                        <div className="cursor-pointer flex justify-center items-center w-full py-2 px-2">
                                            <img
                                                src="src/assets/iMessageBox.svg"
                                                alt="chatbox"
                                                className="w-full "
                                            />
                                            <div className="w-full py-6 px-16 absolute flex">
                                                <input
                                                    className="w-full"
                                                    type="text"
                                                    placeholder="คุยเลย..."
                                                />
                                                <button className="ิ border-2 border-black w-16 rounded-md">
                                                    ส่ง
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
                    <div className="flex flex-col items-center mt-3">
                        <p className="text-sm mb-1">
                            หากระบบก่งก๊ง กดปุ่ม Sync เล้ย
                        </p>
                        <div className="w-40">
                            <Button text="Sync" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 lg:mt-0 mb-6">
                <p className="font-semibold text-2xl mb-2 text-center lg:text-left ">
                    Sponsors
                </p>
                <div className="flex flex-col lg:flex-row justify-evenly">
                    <div>
                        <img
                            src="/src/assets/iBigBox.svg"
                            className="w-[360px]"
                        />
                    </div>
                    <div>
                        {' '}
                        <img
                            src="/src/assets/iBigBox.svg"
                            className="w-[360px]"
                        />
                    </div>
                    <div>
                        {' '}
                        <img
                            src="/src/assets/iBigBox.svg"
                            className="w-[360px]"
                        />
                    </div>
                    <div>
                        {' '}
                        <img
                            src="/src/assets/iBigBox.svg"
                            className="w-[360px]"
                        />
                    </div>
                </div>
                <p className="text-center lg:text-right">สนใจเป็น sponsors</p>
            </div>
            {/* </div> */}
        </>
    )
}
