import React from 'react'
import ModalsReuse from './ModalsReuse'
import { useNavigate } from 'react-router-dom'
import { IiGoogle, IiHead, IiLogin, IiTick } from '../../icons'

function Login() {
  const navigate = useNavigate()
  const handleClickLogin = () => {
    navigate('/login')
  }
  const handleClickRegister = () => {
    navigate('/register')
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
          <p>JOIN WITH GOOGLE</p>
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

    ///เพิ่มปุ่มลิ้งค์ ไปที่ google Login
  )
}

export default Login
