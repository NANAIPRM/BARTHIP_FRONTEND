import React from 'react'
import { Link } from 'react-router-dom'
import { IiThankYou } from '../../../icons'

function ThankYouPageContainer() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <IiThankYou />
      </div>
      <div className="flex justify-center items-center">
        <div>--ขอบคุณสำหรับการสนับสนุนเว็บไซต์ของพวกเรานะครับ--</div>
      </div>
      <br />

      <div className="flex justify-center items-center">
        <Link
          to="/"
          className="w-40 flex justify-center border-2 border-black rounded-md"
        >
          กลับหน้าหลัก
        </Link>
      </div>
    </div>
  )
}

export default ThankYouPageContainer
