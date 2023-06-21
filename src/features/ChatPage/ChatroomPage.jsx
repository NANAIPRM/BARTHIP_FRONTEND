export default function ChatroomPage() {
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
                    <div className="flex justify-center mb-3 relative">
                        <img
                            className="w-52 "
                            src="https://drinksonme.live/logo.png"
                            alt="Drinks On Me"
                        />
                    </div>
                    <div className="flex max-w-5xl flex-col lg:flex-row w-full bg-green-400 mx-auto">
                        <div className="bg-red-300 w-full flex flex-col justify-center px-0 sm:px-10 relative ">
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
                                    </button>
                                </div>
                            </div>
                            <div className="hidden lg:flex lg:justify-end w-[356px] pr-4 ">
                                suggestion text
                            </div>
                        </div>
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
            </div>
            {/* </div> */}

            {/* footer */}
            <footer className="py-3 flex justify-center bg-slate-300 ">
                <p>
                    <span className="underline cursor-pointer ">About Us</span>{' '}
                    |{' '}
                    <span className=" underline cursor-pointer">
                        Support Us
                    </span>
                </p>
                <div className="flex justify-center mx-1 ">
                    <a href="#" className="cursor-pointer px-1 w-9">
                        <img
                            src="https://drinksonme.live/_nuxt/img/discord.5e1a431.png"
                            alt="discord"
                        />
                    </a>
                    <a href="#" className="cursor-pointer px-1 w-9">
                        <img
                            src="https://drinksonme.live/_nuxt/img/ig.0164ff9.png"
                            alt="instagram"
                        />
                    </a>
                    <a href="#" className="cursor-pointer px-1 w-9">
                        <img
                            src="https://drinksonme.live/_nuxt/img/tiktok.210dc3e.png"
                            alt="discord"
                        />
                    </a>
                </div>
            </footer>
        </>
    )
}
