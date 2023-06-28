import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, getMe } from '../../../api/auth-api'
import { IiBoxbuy, IiLogin, IiMessageBox, IiTee, IiX } from '../../../icons'
import validateLogin from './validate/validate-login'
import { addAccessToken } from '../../../utils/localStorage'
import useAuth from '../../../hooks/useAuth'
const loginInput = {
  email: '',
  password: '',
}

function LoginPageContainer() {
  const [input, setInput] = useState(loginInput)
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const { user, setUser, setReload } = useAuth()

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const result = validateLogin(input)
      if (result) {
        return setError(result)
      }
      setError('')
      const loginResult = await login(input)
      addAccessToken(loginResult.data.accessToken)
      const meResult = await getMe(loginResult.data.token)
      setUser(meResult.data.user)
      toast.success('Login successfully')
      navigate('/')
    } catch (err) {
      toast.error(err.response.data.message)
    }
  }

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  return (
    <div className="flex justify-center items-center h-screen">
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
                value={input.email}
                onChange={handleChangeInput}
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
                value={input.password}
                onChange={handleChangeInput}
              />
            </div>
          </div>
          <label className="label">
            <Link to="/register" className="label-text-alt link link-hover">
              sign up?
            </Link>
          </label>
          {error && <p className="text-red-500">{error}</p>}
          <button className="cursor-pointer flex justify-center items-center w-40 py-2 px-4">
            <IiLogin />
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPageContainer
