import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { getAvatarApi } from '../api/post-api'

const AvatarContext = createContext()

function AvatarContextComponent({ children }) {
  const [Avatar, setAvatar] = useState([])

  const getAvatars = async () => {
    const res = await getAvatarApi()
    setAvatar(res.data.avatar)
  }
  useEffect(() => {
    getAvatars()
  }, [])

  return (
    <AvatarContext.Provider value={{ Avatar, setAvatar }}>
      {children}
    </AvatarContext.Provider>
  )
}
export { AvatarContext }
export default AvatarContextComponent
