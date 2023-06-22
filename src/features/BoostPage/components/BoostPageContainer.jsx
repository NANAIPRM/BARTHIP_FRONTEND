import React from 'react'
import { useNavigate } from 'react-router-dom'

function BoostPageContainer() {
  const navigate = useNavigate()
  const handleClickBuyBoost = () => {
    navigate('/payment')
  }

  return (
    <>
      <div className="max-w-5xl flex flex-col justify-center mx-auto">
        <div className="flex justify-center">
          <div className="w-44 flex">
            <img src="src/assets/iLogo.svg" alt="bartrip" />
          </div>
          <div>
            <div className="py-2 relative w-[80%]">
              <img
                src="src/assets/iChatBoxNew.svg"
                className="relative w-full "
              />
              <div className="absolute z-20 top-6 px-10 py-2">
                <div className="w-36 mx-auto">
                  <img src="src/assets/iBartender.svg" />
                </div>
                <div className="flex">
                  <img src="src/assets/iTick.svg" className="w-6" />
                  <p className="py-4">เครื่องดื่มที่เหมาะกับคุณ</p>
                </div>
                <div className="flex">
                  <img src="src/assets/iTick.svg" className="w-6" />
                  <p>หมวกที่บ่งบอกสไตล์ของคุณ</p>
                </div>
                <div className="flex items-start">
                  <img src="src/assets/iTick.svg" className="w-6" />
                  <div>
                    ลดการดีเลย์ส่งข้อความตอนคุยกับเพื่อน
                    <div>เพื่อนในห้องได้ผลพลอยได้ไปด้วย</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <img src="src/assets/iTick.svg" className="w-6" />
                  <div>
                    รีพอร์ตได้ 3 ครั้ง/วัน
                    <div>(ยูสเซอร์ปกติได้ 1 ครั้ง/วัน)</div>
                  </div>
                </div>
                <br />
                <div className="flex justify-center items-center">
                  <button
                    className=" border-2 border-black w-52 rounded-md"
                    onClick={handleClickBuyBoost}
                  >
                    จ่าย 39 บาท/เดือน
                  </button>
                </div>

                <div className="flex mt-5 mr-2 items-center"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mx-auto">
          <h1>FAQ</h1>
          <div>
            <p>Q: ถ้าครบเดือนที่ซื้อบูสต์ไว้แล้วจะเกิดอะไรขึ้น</p>
            <p>
              A: ไอเทมแต่งตัวต่าง ๆ จะหายอัตโนมัติ สามารถมากดซื้อบูสต์ใหม่ได้
            </p>
          </div>
          <div>
            <p>Q: เปลี่ยนหมวก ถอดหมวดได้ไหม</p>
            <p>
              A: ตอนนี้ยังทำไม่ได้ เป็น feature ในอนาคต
              เมื่อมีคนสนับสนุนเว็บมากขึ้น
            </p>
          </div>
          <div>
            <p>Q: หมวกเปลี่ยนตามเทศกาลคือยังไง</p>
            <p>
              A: ทุก ๆ เดือนเราจะออกหมวกเซ็ตใหม่ หรือมีหมวกพิเศษตาม Theme
              ในช่วงเทศกาลต่าง ๆ
              (เมื่อก่อนจะเปลี่ยนให้ทุกคนที่เป็นยูสเซอร์ล๊อกอิน
              แต่หลังจากนี้จะเปลี่ยนเฉพาะหมวกของยูสเซอร์บูสเท่านั้น พิเศษแน่นอน
              !)
            </p>
          </div>
          <div>
            <p>Q: หากกดรับ QRcode เพื่อโอนแล้ว ต้องโอนภายในเวลาเท่าไร</p>
            <p>
              A: ภายใน 60 นาทีหลังจากกดรับ QRcode นะคะ แต่สามารถกดสร้าง QRcode
              ใหม่ได้ โดยการกลับไปหน้า bartrip.com/boost แล้วกดซื้ออีกรอบค่ะ
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BoostPageContainer
