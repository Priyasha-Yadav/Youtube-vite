import { useState } from 'react'
import './style.css'
import Menu from './components/Menu/Menu.jsx'
import MainContent from './components/MainContent/MainContent.jsx'


function App() {

  return (
    <>
      <div className="main">
        <Menu />
        <MainContent />
      </div>
    </>
  )
}

export default App
