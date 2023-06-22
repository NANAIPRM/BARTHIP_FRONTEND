import React from 'react'
import ModalsReuse from './ModalsReuse'
import { useNavigate } from 'react-router-dom'

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
      <ModalsReuse
        title={<img src="src/assets/iLogin.svg" />}
        header={'ล็อคอินกัน!!'}
      >
        <div className="flex">
          <img src="src/assets/iTick.svg" className="w-10" />

          <p className="py-4">ได้เครื่องดื่มฟรี คนละแก้ว</p>
        </div>
        <div className="flex">
          <img src="src/assets/iTick.svg" className="w-10" />
          <p className="py-4">ไม่หลุดออกจากห้องเวลารีเฟรช</p>
        </div>
        <hr />
        <div className="flex flex-col items-center mt-2">
          <img src="src/assets/iGoogle.svg" className="w-20" />
          <p>JOIN WITH GOOGLE</p>
        </div>
        <div
          className="flex flex-col items-center mt-2"
          onClick={handleClickLogin}
        >
          <img src="src/assets/iLogin.svg" className="w-20" />
          <p>LOG IN</p>
        </div>
        <div
          className="flex flex-col items-center mt-2"
          onClick={handleClickRegister}
        >
          <img src="src/assets/iHead.svg" className="w-20" />
          <p>REGISTER</p>
        </div>
      </ModalsReuse>
    </div>

    ///เพิ่มปุ่มลิ้งค์ ไปที่ google Login
  )
}

export default Login
