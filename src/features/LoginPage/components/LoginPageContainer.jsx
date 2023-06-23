import React from 'react'
import { Link } from 'react-router-dom'
import { IiBuybox, IiLogin, IiMessageBox, IiX } from '../../../icons'

function LoginPageContainer() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <IiBuybox className="relative mx-auto w-[380px]" />
      <div className="w-[20vw] mx-auto flex flex-col justify-center items-center py-8 absolute">
        <Link to="/">
          <IiX className="absolute top-8 right-6 w-8 cursor-pointer" />
        </Link>
        <img src="src/assets/iTee.svg" className="w-16" />
        <div>
          <div className="cursor-pointer flex justify-center items-center w-full py-2 px-4 relative">
            <IiMessageBox className="w-full" />
            <div className="w-full py-4 px-6 absolute flex">
              <input type="text" placeholder="email" className="w-full" />
            </div>
          </div>
          <div className="cursor-pointer flex justify-center items-center w-full py-2 px-4 relative">
            <IiMessageBox className="w-full" />
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
          <IiLogin />
        </div>
      </div>
    </div>
  )
}

export default LoginPageContainer
