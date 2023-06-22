import React from 'react'
import ModalsReuse from './ModalsReuse'
import { useNavigate } from 'react-router-dom'

function Random() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/chat')
  }

  return (
    <div className="w-28">
      <ModalsReuse
        title={<img src="src/assets/iHead.svg" />}
        header={'อยากเลือกคุยกับเพื่อนแบบไหนดี'}
      >
        <div className="flex justify-center space-x-4 ">
          <div
            className="flex flex-col items-center mt-2"
            onClick={handleClick}
          >
            <img src="src/assets/iRandom2.svg" className="w-56" />
            <p>เลือกสองต่อสอง</p>
          </div>
          <div
            className="flex flex-col items-center mt-2 "
            onClick={handleClick}
          >
            <img src="src/assets/iRandom5.svg" className="w-56" />
            <p>เลือกเปิดตี้หมู่</p>
          </div>
        </div>
        <br />
        <div className="flex justify-end">
          <button className=" border-2 border-black w-16 rounded-md">
            จอย
          </button>
        </div>
      </ModalsReuse>
    </div>
  )
}

export default Random
