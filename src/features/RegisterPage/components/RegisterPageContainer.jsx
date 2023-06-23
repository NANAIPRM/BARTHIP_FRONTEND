import React from 'react'
import { Link } from 'react-router-dom'
import {
  IiBtnNew,
  IiChatBoxNew,
  IiMessageBox,
  IiTee,
  IiX,
} from '../../../icons'
import { useState } from 'react'
import { toast } from 'react-toastify'

import validateRegister from './validate/ValidateRegister'

function RegisterPageContainer() {
  const [registerInput, SetRegisterInput] = useState({})
  const [error, setError] = useState('')

  const hdlChangeInput = (e) => {
    SetRegisterInput({ ...registerInput, [e.target.name]: e.target.value })
    console.log(registerInput)
  }
  const hdlSubmit = async (e) => {
    try {
      e.preventDefault()
      const result = validateRegister(input)
      console.log('-------input', input)
      console.log('-----result', result)
      if (result) {
        return setError(result)
      }
      setError({})
      // await register(input)
      await toast.success('register successfully')
    } catch (err) {
      toast.error(err.message)
      console.log(err)
    }
  }
  return (
    <div className="flex justify-center items-center h-screen ">
      <IiChatBoxNew className="relative mx-auto w-[328px]" />
      <div className="w-[20vw] mx-auto flex flex-col justify-center items-center py-8 absolute">
        <Link to="/">
          <IiX className="absolute top-4 right-4 w-8 cursor-pointer" />
        </Link>
        <IiTee className="w-16" />
        <div>
          <div className="cursor-pointer flex justify-center items-center w-full py-2 px-4 relative">
            <IiMessageBox className="w-full" />
            <div className="w-full py-4 px-6 absolute flex">
              <input
                type="text"
                placeholder="Nickname"
                className="w-full"
                value={registerInput.nickname}
                name="nickname"
                onChange={hdlChangeInput}
              />
            </div>
          </div>
          <div className="cursor-pointer flex justify-center items-center w-full py-2 px-4 relative">
            <IiMessageBox className="w-full" />
            <div className="w-full py-6 px-6 absolute flex">
              <input
                type="email"
                placeholder="email"
                className="w-full"
                value={registerInput.email}
                name="email"
                onChange={hdlChangeInput}
              />
            </div>
          </div>
          <div className="cursor-pointer flex justify-center items-center w-full py-2 px-4 relative">
            <IiMessageBox className="w-full" />
            <div className="w-full py-6 px-6 absolute flex">
              <input
                type="password"
                placeholder="password"
                className="w-full"
                value={registerInput.password}
                name="password"
                onChange={hdlChangeInput}
              />
            </div>
          </div>
          <div className="cursor-pointer flex justify-center items-center w-full py-2 px-4 relative">
            <IiMessageBox className="w-full" />
            <div className="w-full py-6 px-6 absolute flex">
              <input
                type="password"
                placeholder="confirm password"
                className="w-full"
                value={registerInput.confirmPassword}
                name="confirmPassword"
                onChange={hdlChangeInput}
              />
            </div>
          </div>
        </div>
        <div
          className="cursor-pointer flex justify-center items-center w-32 py-2 px-4 relative"
          onClick={() => hdlSubmit()}
        >
          <IiBtnNew />
          <p className="absolute top-3 z-10">register</p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPageContainer
