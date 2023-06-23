import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IiBoxbuy, IiLogin, IiMessageBox, IiTee, IiX } from '../../../icons'

function LoginPageContainer() {
  const [loginInput, setLoginInput] = useState({ email: '', password: '' })
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (loginInput.email && loginInput.password) {
      await loginFn(loginInput)
      navigate('/')
    }
  }
  const handleOnchangeLogin = (e) =>
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value })
  return (
    <div className="flex justify-center items-center h-screen ">
      <IiBoxbuy className="relative mx-auto w-[500px]" />
      <div className="w-[20vw] mx-auto flex flex-col justify-center items-center py-8 absolute">
        <Link to="/">
          <IiX className="absolute top-8 right-1 w-8 cursor-pointer" />
        </Link>
        <IiTee className="w-20" />
        <form onSubmit={handleSubmit}>
          <div className="cursor-pointer flex justify-center items-center w-full py-2 px-4 relative">
            <IiMessageBox />
            <div className="w-full py-4 px-6 absolute flex">
              <input
                type="text"
                placeholder="email"
                name="email"
                required
                className="w-full"
                value={loginInput.email}
                onChange={(e) => handleOnchangeLogin(e)}
              />
            </div>
          </div>

          <div className="cursor-pointer flex justify-center items-center w-full py-2 px-4 relative">
            <IiMessageBox />
            <div className="w-full py-6 px-6 absolute flex">
              <input
                type="password"
                placeholder="password"
                name="password"
                className="w-full"
                value={loginInput.password}
                onChange={(e) => handleOnchangeLogin(e)}
              />
            </div>
          </div>
          <label className="label">
            <Link to="/register" className="label-text-alt link link-hover">
              sign up?
            </Link>
          </label>
        </form>
        <button className="cursor-pointer flex justify-center items-center w-40 py-2 px-4  ">
          <IiLogin />
        </button>
      </div>
    </div>
  )
}

export default LoginPageContainer
