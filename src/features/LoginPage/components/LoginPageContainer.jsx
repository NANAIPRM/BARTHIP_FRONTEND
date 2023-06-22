import React from 'react'
import Button from '../../../components/button'

function LoginPageContainer() {
  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <div>
        <div className="cursor-pointer flex justify-center items-center w-52 py-2 px-4 relative">
          <img src="src/assets/iMessageBox.svg" alt="chatbox" />
          <div className="w-full py-6 px-10 absolute flex">
            <input type="text" placeholder="email" className="w-32" />
          </div>
        </div>
        <div className="cursor-pointer flex justify-center items-center w-52 py-2 px-4 relative">
          <img src="src/assets/iMessageBox.svg" alt="chatbox" />
          <div className="w-full py-6 px-10 absolute flex">
            <input type="text" placeholder="password" className="w-32" />
          </div>
        </div>
      </div>
      <div></div>
      <div className="w-40">
        <Button text="Log in" />
      </div>
    </div>
  )
}

export default LoginPageContainer
