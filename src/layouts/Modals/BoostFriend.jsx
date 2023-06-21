import React from 'react'
import ModalsReuse from './ModalsReuse'

const handleClick = () => {}

function BoostFriend() {
    return (
        <div className="w-20" onClick={handleClick}>
            <ModalsReuse
                title={<img src="src/assets/iBoost.svg" />}
                header={'ยินดีด้วย! มียูสเซอร์บูสอยู่ในห้องนี้'}
            >
                <img className="mx-auto" src="src/assets/iBoy.svg" />

                <p className="py-4">
                    เค้ามีพลังลดการดีเลย์ในการส่งข้อความ ทำให้แชทกันได้เร็วขึ้น
                    แถมเพื่อนๆ ในห้องได้ผลพลอยได้ไปด้วย
                </p>
            </ModalsReuse>
        </div>
    )
}

export default BoostFriend
