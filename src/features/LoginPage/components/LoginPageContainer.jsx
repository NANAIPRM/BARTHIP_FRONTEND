import React from 'react'
import { Link } from 'react-router-dom'

function LoginPageContainer() {
    return (
        <div className="flex justify-center items-center h-screen ">
            <img
                src="src/assets/iBuyBox.svg"
                className="relative mx-auto w-[380px]"
            />
            <div className="w-[20vw] mx-auto flex flex-col justify-center items-center py-8 absolute">
                <Link to="/">
                    <img
                        src="src/assets/iX.svg"
                        className="absolute top-8 right-6 w-8 cursor-pointer"
                    />
                </Link>
                <img src="src/assets/iTee.svg" className="w-16" />
                <div>
                    <div className="cursor-pointer flex justify-center items-center w-full py-2 px-4 relative">
                        <img
                            src="src/assets/iMessageBox.svg"
                            alt="chatbox"
                            className="w-full"
                        />
                        <div className="w-full py-4 px-6 absolute flex">
                            <input
                                type="text"
                                placeholder="email"
                                className="w-full"
                            />
                        </div>
                    </div>
                    <div className="cursor-pointer flex justify-center items-center w-full py-2 px-4 relative">
                        <img
                            src="src/assets/iMessageBox.svg"
                            alt="chatbox"
                            className="w-full"
                        />
                        <div className="w-full py-6 px-6 absolute flex">
                            <input
                                type="password"
                                placeholder="password"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="cursor-pointer flex justify-center items-center w-32 py-2 px-4  ">
                    <img src="src/assets/iLogin.svg" />
                </div>
            </div>
        </div>
    )
}

export default LoginPageContainer
