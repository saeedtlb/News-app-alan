import React from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
require('dotenv').config()

import actionByCommand from './command'
import Cards from './components/Cards'

const App = () => {
  useEffect(() => {
    alanBtn({
      key: process.env.ALEN_KEY,
      onCommand: actionByCommand
    })
  }, [])

  return (
    <>
      <div className="logo_container">
        <img src="/alan-logo.png" alt="alan-logo" />
      </div>
      <Cards />
    </>
  )
}

export default App
