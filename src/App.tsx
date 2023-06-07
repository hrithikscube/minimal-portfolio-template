import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/components/pages/Home'
import Projects from './assets/components/pages/Projects'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  )
}

export default App