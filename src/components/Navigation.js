import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div className="navbar">
      <button type="button"><Link to="/index">Startpage</Link></button>
      <button type="button"><Link to="/books">All books</Link></button>
      <button type="button"><Link to="/top100">100 top rated</Link></button>
      <button type="button"><Link to="/nonenglish">All non-english books</Link></button>
    </div>
  )
}