import React from 'react'
import Header from './components/Header.jsx'
// import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className=''> 
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default App