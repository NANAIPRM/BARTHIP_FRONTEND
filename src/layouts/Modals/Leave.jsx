import React from 'react'
import ModalsReuse from './ModalsReuse'

function Leave() {
    return (
        <ModalsReuse
            title={'ออกจากโต๊ะ?'}
            header={'แน่ใจนะว่าจะออกจากห้อง เปลี่ยนใจไหม'}
        >
            <div className="w-40 mx-auto">
                <img src="src/assets/iBoy.svg" />
            </div>
            <div className="flex">
                <div className="w-20 mx-auto">
                    <img src="src/assets/iCorrect.svg" />
                </div>
                <div className="w-20 mx-auto">
                    <img src="src/assets/iNo.svg" />
                </div>
            </div>
        </ModalsReuse>
    )
}

export default Leave
