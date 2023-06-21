import React from 'react'
import Layout from '../../../layouts/Container'
import BoostFriend from '../../../layouts/Modals/BoostFriend'
import Leave from '../../../layouts/Modals/Leave'
import Login from '../../../layouts/Modals/Login'
import Report from '../../../layouts/Modals/Report'
import Boost from '../../../layouts/Modals/Boost'

function HomePageContainer() {
    return (
        <div className="text-bold">
            <h1 className="flex justify-center text-7xl mt-16">Bar Tip</h1>

            {/* <div className="flex justify-evenly">
        <img src="src/assets/iChatBox.svg" alt="chatbox" />
        
      </div> */}
            <div className="flex justify-end">
                <div className="relative inline-block">
                    <img src="src/assets/iChatBox.svg" alt="chatbox" />
                    <a
                        href="#"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white px-4 py-2 rounded"
                    >
                        Click Me
                    </a>
                    <img src="src/assets/iBtn.svg" alt="chatbox" />
                </div>
            </div>
            <Login />
            <Report />
            <Leave />
            <Boost />
            <BoostFriend />

            <Layout />
        </div>
    )
}

export default HomePageContainer
