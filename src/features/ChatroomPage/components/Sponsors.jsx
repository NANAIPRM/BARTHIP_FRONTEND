import React from 'react'
import { IiBigBox } from '../../../icons'

function Sponsors() {
  return (
    <div className="mt-6 lg:mt-0 mb-6">
      <p className="font-semibold text-2xl mb-2 text-center lg:text-left ">
        Sponsors
      </p>
      <div className="flex flex-col lg:flex-row justify-evenly">
        <div>
          <IiBigBox className="w-[360px]" />
        </div>
        <div>
          {' '}
          <IiBigBox className="w-[360px]" />
        </div>
        <div>
          {' '}
          <IiBigBox className="w-[360px]" />
        </div>
        <div>
          {' '}
          <IiBigBox className="w-[360px]" />
        </div>
      </div>
      <p className="text-center lg:text-right">สนใจเป็น sponsors</p>
    </div>
  )
}

export default Sponsors
