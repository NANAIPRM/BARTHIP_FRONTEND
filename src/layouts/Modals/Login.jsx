import React, { useEffect } from 'react'
import ModalsGoogleLogin from './ModalsGoogleLogin'
import { useNavigate } from 'react-router-dom'
import { IiGoogle, IiHead, IiLogin, IiTick } from '../../icons'
import useGoogle from '../../hooks/useGoogle'

function Login() {
  const { glogin } = useGoogle()

  const handleCallbackResponse = (response) => {
    glogin(response.credential)
  }

  useEffect(() => {
    const initializeGoogleAPI = () => {
      if (window.google?.accounts?.id) {
        window.google.accounts.id.initialize({
          client_id:
            '177252823585-l9q3h51ok9bashd10qnhp03dd83e76ff.apps.googleusercontent.com',
          callback: handleCallbackResponse,
        })

        window.google.accounts.id.renderButton(
          document.getElementById('signin'),
          {
            theme: 'outline',
            size: 'large',
          }
        )
      } else {
        setTimeout(initializeGoogleAPI, 100)
      }
    }

    initializeGoogleAPI()
  }, [])

  const navigate = useNavigate()

  const handleClickLogin = () => {
    navigate('/login')
  }

  const handleClickRegister = () => {
    navigate('/register')
  }

  return (
    <div className="w-28">
      <ModalsGoogleLogin
        title={<IiLogin />}
        header={'ล็อคอินกัน!!'}
        id={'signin'}
      >
        <div className="flex">
          <IiTick className="w-10" />
          <p className="py-4">ได้เครื่องดื่มฟรี คนละแก้ว</p>
        </div>
        <div className="flex">
          <IiTick className="w-10" />
          <p className="py-4">ไม่หลุดออกจากห้องเวลารีเฟรช</p>
        </div>
        <hr />
        <div className="flex flex-col items-center mt-2">
          <IiGoogle className="w-20" />
          <div id="signin"></div>
        </div>
        <div
          className="flex flex-col items-center mt-2"
          onClick={handleClickLogin}
        >
          <IiLogin className="w-20" />
          <p>LOG IN</p>
        </div>
        <div
          className="flex flex-col items-center mt-2"
          onClick={handleClickRegister}
        >
          <IiHead className="w-20" />
          <p>REGISTER</p>
        </div>
      </ModalsGoogleLogin>
    </div>
  )
}

export default Login
