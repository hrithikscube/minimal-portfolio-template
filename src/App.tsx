import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/components/pages/Home'
import Projects from './assets/components/pages/Projects'
// import Demo from './assets/components/pages/Demo'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      {/* <Route path="/learning" element={<Demo />} /> */}
    </Routes>
  )
}

export default App