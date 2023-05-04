import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from 'components/Header'
import { Navigation } from 'components/Navigation'
import { Start } from 'components/Start'
import { Main } from 'components/Main'

import { MainTop100 } from 'components/MainTop100'
import { SingleItem } from 'components/SingleItem'

export const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Navigation />
        <Header />
        <Routes>
          <Route path="/index" element={<Start />} />
          <Route path="/books" element={<Main />} />
          <Route path="/top100" element={<MainTop100 />} />
          <Route path="/books/:id" element={<SingleItem />} />
          {/* Other routes */}
          <Route path="*" element={<Navigate to="/index" />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
