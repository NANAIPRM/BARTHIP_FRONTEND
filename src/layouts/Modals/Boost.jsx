import React from 'react'
import ModalsReuse from './ModalsReuse'

function Boost() {
    return (
        <ModalsReuse title={'BarTip Boost'} header={'Thank you for using!'}>
            <div>
                <img src="src/assets/iTick.svg" />
                <p className="py-4">Buy us a Drinks</p>
            </div>
            <div>
                <img src="src/assets/iTick.svg" />
                <p className="py-4">Buy us a Drinks</p>
            </div>
            <div>
                <img src="src/assets/iTick.svg" />
                <p className="py-4">Buy us a Drinks</p>
            </div>
        </ModalsReuse>
    )
}

export default Boost
