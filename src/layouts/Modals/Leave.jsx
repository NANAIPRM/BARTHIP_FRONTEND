import React from 'react'
import { IiCorrect, IiNo } from '../../icons'
import ModalsReuse from './ModalsReuse'

function Leave() {
  return (
    <ModalsReuse
      title={'ออกจากโต๊ะ?'}
      header={'แน่ใจนะว่าจะออกจากห้อง เปลี่ยนใจไหม'}
    >
      <div className="w-40 mx-auto">
        <IBoy />
      </div>
      <div className="flex">
        <div className="w-20 mx-auto">
          <IiCorrect />
        </div>
        <div className="w-20 mx-auto">
          <IiNo />
        </div>
      </div>
    </ModalsReuse>
  )
}

export default Leave
