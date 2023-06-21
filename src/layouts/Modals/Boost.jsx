import React from 'react'
import ModalsReuse from './ModalsReuse'
import Button from '../../components/button'

const handleClick = () => {}

function Boost() {
    return (
        <div className="w-20" onClick={handleClick}>
            <ModalsReuse
                title={<img src="src/assets/iBoost.svg" />}
                header={'BarTip Boost'}
            >
                <div className="w-40 mx-auto">
                    <img src="src/assets/iBartender.svg" />
                </div>
                <div className="flex">
                    <img src="src/assets/iTick.svg" className="w-10" />
                    <p className="py-4">เครื่องดื่มที่เหมาะกับคุณ</p>
                </div>
                <div className="flex">
                    <img src="src/assets/iTick.svg" className="w-10" />
                    <p className="py-4">หมวกที่บ่งบอกสไตล์ของคุณ</p>
                </div>
                <div className="flex items-start">
                    <img src="src/assets/iTick.svg" className="w-10" />
                    <div className="py-4">
                        ลดการดีเลย์ส่งข้อความตอนคุยกับเพื่อน
                        <div>เพื่อนในห้องได้ผลพลอยได้ไปด้วย</div>
                    </div>
                </div>
                <div className="flex items-start">
                    <img src="src/assets/iTick.svg" className="w-10" />
                    <div className="py-4">
                        รีพอร์ตได้ 3 ครั้ง/วัน
                        <div>(ยูสเซอร์ปกติได้ 1 ครั้ง/วัน)</div>
                    </div>
                </div>
                <Button text="ไปหน้าซื้อบูส" />
            </ModalsReuse>
        </div>
    )
}

export default Boost
