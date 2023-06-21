import Login from './Modals/Login'
import Boost from './Modals/Boost'
import { Link } from 'react-router-dom'
import Music from './Modals/Music'

export default function Navbar() {
    return (
        <>
            <button>
                <Link to="/">
                    <img
                        className="w-12 fixed top-5 left-5"
                        src="src/assets/iHome.svg"
                        alt="home"
                    />
                </Link>
            </button>
            {/* <button className="cursor-pointer flex justify-center items-center p-3 w-32 z-50 fixed top-5 left-20">
                <p className="font-semibold">ออกจากโต๊ะ</p>
            </button> */}

            <div className="flex fixed top-5 right-5 z-50 cursor-pointer gap-x-1 ">
                <Boost />
                <Music />
                {/* <img
                    className="w-12 h-12 cursor-pointer z-40"
                    src="src/assets/iBoost.svg"
                    alt="boost-logo"
                /> */}
                {/* <img
                    className="w-14 cursor-pointer z-40"
                    src="https://drinksonme.live/counter-page/sound.gif"
                    alt="music-logo"
                /> */}
                {/* <img
                    className="w-20 cursor-pointer z-40"
                    src="src/assets/iLogin.svg"
                    alt="login"
                /> */}
                <Login />
            </div>
        </>
    )
}
