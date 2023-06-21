import React from 'react'
import ModalsReuse from './ModalsReuse'

const handleClick = () => {}

function Login() {
    return (
        <div className="w-20" onClick={handleClick}>
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
            </ModalsReuse>
        </div>

        ///เพิ่มปุ่มลิ้งค์ ไปที่ google Login
    )
}

export default Login
