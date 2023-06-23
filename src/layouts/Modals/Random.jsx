import React from 'react'
import ModalsReuse from './ModalsReuse'
import { useNavigate } from 'react-router-dom'
import { IiHead, IiRandom2, IiRandom5 } from '../../icons'

function Random() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/chat')
  }

  return (
    <div className="w-28">
      <ModalsReuse title={<IiHead />} header={'อยากเลือกคุยกับเพื่อนแบบไหนดี'}>
        <div className="flex justify-center space-x-4 ">
          <div
            className="flex flex-col items-center mt-2"
            onClick={handleClick}
          >
            <IiRandom2 className="w-56" />
            <p>เลือกสองต่อสอง</p>
          </div>
          <div
            className="flex flex-col items-center mt-2 "
            onClick={handleClick}
          >
            <IiRandom5 className="w-56" />
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
