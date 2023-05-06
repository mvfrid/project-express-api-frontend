import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from 'components/Header'
import { Navigation } from 'components/Navigation'
import { Start } from 'components/Start'
import { Main } from 'components/Main'
import { SingleItem } from 'components/SingleItem'

export const App = () => {
  const [selectedBookId, setSelectedBookId] = useState(null);

  const handleBookClick = (bookId) => {
    setSelectedBookId(bookId);
    Navigate(`/books/${bookId}`);
  }

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Navigation />
        <Header />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/books" element={<Main endpoint="books" title="All book reviews" onBookClick={handleBookClick} />} />
          <Route path="/books/top100" element={<Main endpoint="books/top100" title="Top 100 rated books" onBookClick={handleBookClick} />} />
          <Route path="/books/nonenglishbooks" element={<Main endpoint="books/nonenglishbooks" title="All non-english books" onBookClick={handleBookClick} />} />
          <Route path="/books/:id" element={<SingleItem id={selectedBookId} onBookClick={handleBookClick} />} />
          {/* Other routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
