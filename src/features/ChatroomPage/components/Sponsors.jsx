import React from 'react'
import { IiCodeCamp, IiPEarth, IiPJiang, IiPVee } from '../../../icons'

function Sponsors() {
  return (
    <div className="mt-6 lg:mt-0 mb-6">
      <p className="font-semibold text-2xl mb-2 text-center lg:text-left ">
        Sponsors
      </p>
      <div className="flex flex-col lg:flex-row justify-evenly">
        <div>
          <IiPEarth className="w-[360px]" />
        </div>
        <div>
          {' '}
          <IiCodeCamp className="w-[360px]" />
        </div>
        <div>
          {' '}
          <IiPVee className="w-[360px]" />
        </div>
        <div>
          {' '}
          <IiPJiang className="w-[360px]" />
        </div>
      </div>
      <p className="text-center lg:text-right">สนใจเป็น sponsors</p>
    </div>
  )
}

export default Sponsors
