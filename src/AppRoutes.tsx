import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'

/* here is where we store all of the routes for our pages.
 Any new page needs to be added to this file, and its correlated paths */
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
