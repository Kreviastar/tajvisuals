import React from 'react'
import './index.css'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import Projects from './components/Projects/project'

import './App.css'
import Services from './components/Services/Services'
import About from './components/About/About'
const App = () => {
  return (
     <div className="App">
        <div className="blur blur2" style={{ top: '-18%', right: '0' }}></div>
        <div className="blur " style={{ top: '36%', left: '-8rem' }}></div>

          <NavBar/>
          <Header />
          <Services/>
          <About/>
         <Projects/>
     </div>
  )
}

export default App