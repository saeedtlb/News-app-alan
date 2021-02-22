import React, { useState, useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'

import actionByCommand from './command'
import Cards from './components/Cards'

require('dotenv').config()

const App = () => {
  const [articles, setArticles] = useState([])
  const [activeArticle, setActiveArticle] = useState(0)

  useEffect(() => {
    let alanBtnInstance = alanBtn({
      key: process.env.REACT_APP_ALEN_KEY,
      onCommand: (command) => actionByCommand(command, setArticles, setActiveArticle, alanBtnInstance),
      onConnectionStatus: async (status) => {
        console.log(85, status)
        if (status === 'authorized') {
          await alanBtnInstance.activate()
          alanBtnInstance.playText('Hey, this is Alan')
        }
      }
    })
  }, [])

  return (
    <>
      <header>
        <img src="/alan-logo.png" alt="alan-logo" />
      </header>
      <Cards articles={articles} activeArticle={activeArticle} />
    </>
  )
}

export default App
