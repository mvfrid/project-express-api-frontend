import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Spinner } from './Spinner';

export const Main = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    fetch('https://project-express-api-amd2viobia-nw.a.run.app/books')
      .then((res) => res.json())
      .then((data) => {
        setList(data.body.books);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="main">
      <p>Data, data, data!</p>
      {list.map((item) => (
        <div className="list">
          <ul>Id: {item.bookID}</ul>
          <ul>Title: {item.title}</ul>
          <ul>Author: {item.authors}</ul>
          <ul>Average rating: {item.average_rating}</ul>
        </div>
      ))}
    </div>
  )
}