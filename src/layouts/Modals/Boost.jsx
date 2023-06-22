import React from 'react'
import ModalsReuse from './ModalsReuse'
import Button from '../../components/button'
import { useNavigate } from 'react-router-dom'

function Boost() {
  const navigate = useNavigate()
  const handleClickBoost = () => {
    navigate('/boost')
  }
  return (
    <div className="w-20 ">
      <ModalsReuse
        title={<img src="src/assets/iBoostS.svg" />}
        header={'BarTip Boost'}
      >
        <br />

        <div className="w-40 mx-auto">
          <img src="src/assets/iBartender.svg" />
        </div>

        <br />
        <div className="flex flex-col px-9">
          <div className="flex">
            <img src="src/assets/iTick.svg" className="w-10" />
            <div>เครื่องดื่มที่เหมาะกับคุณ</div>
          </div>
          <div className="flex">
            <img src="src/assets/iTick.svg" className="w-10" />
            <div>หมวกที่บ่งบอกสไตล์ของคุณ</div>
          </div>
          <div className="flex items-start">
            <img src="src/assets/iTick.svg" className="w-10" />
            <div>
              ลดการดีเลย์ส่งข้อความตอนคุยกับเพื่อน
              <div>เพื่อนในห้องได้ผลพลอยได้ไปด้วย</div>
            </div>
          </div>
          <div className="flex items-start">
            <img src="src/assets/iTick.svg" className="w-10" />
            <div>
              รีพอร์ตได้ 3 ครั้ง/วัน
              <div>(ยูสเซอร์ปกติได้ 1 ครั้ง/วัน)</div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div onClick={handleClickBoost}>
          <Button text="ไปหน้าซื้อบูส" />
        </div>
      </ModalsReuse>
    </div>
  )
}

export default Boost
