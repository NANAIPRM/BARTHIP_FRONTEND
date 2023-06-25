import React, { useEffect } from 'react'
import ModalsReuse from './ModalsReuse'
import { useNavigate } from 'react-router-dom'
import { IiGoogle, IiHead, IiLogin, IiTick } from '../../icons'
import useGoogle from '../../hooks/useGoogle'

function Login() {
  const { user, glogin } = useGoogle()
  console.log(user)

  const handleCallbackResponse = (response) => {
    glogin(response.credential)
  }

  useEffect(() => {
    // global google

    window.google?.accounts.id.initialize({
      client_id:
        '177252823585-l9q3h51ok9bashd10qnhp03dd83e76ff.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    })

    window.google?.accounts.id.renderButton(document.getElementById('signin'), {
      theme: 'outline',
      size: 'large',
    })
  }, [])

  const navigate = useNavigate()

  const handleClickLogin = () => {
    navigate('/login')
  }

  const handleClickRegister = () => {
    navigate('/register')
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="w-28">
      <ModalsReuse title={<IiLogin />} header={'ล็อคอินกัน!!'}>
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
          {user ? (
            <>
              <img className="mx-auto" src={user.picture} alt={user.name} />
              <div>{user.name}</div>
            </>
          ) : (
            <div id="signin" className="btn btn-primary"></div>
          )}
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
      </ModalsReuse>
    </div>
  )
}

export default Login
