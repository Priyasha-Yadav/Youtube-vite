import { useEffect, useState } from 'react'
import './style.css'
import MainContent from './components/MainContent/MainContent.jsx'
import Menu from './components/Menu/Menu.jsx'
import axios from 'axios'

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
