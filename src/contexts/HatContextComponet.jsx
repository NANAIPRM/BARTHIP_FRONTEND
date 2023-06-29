import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import { gethatApi } from '../api/post-api'
import { useEffect } from 'react'

const HatContext = createContext()

function HatContextComponet({ children }) {
  const [hat, setHat] = useState([])

  const getHats = async () => {
    const res = await gethatApi()
    setHat(res.data.hats)
  }
  useEffect(() => {
    getHats()
  }, [])
  return (
    <HatContext.Provider value={{ hat, setHat }}>
      {children}
    </HatContext.Provider>
  )
}

export { HatContext }
export default HatContextComponet
