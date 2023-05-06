import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from './Spinner';

export const Main = ({ endpoint, title, onBookClick }) => {
  const [list, setList] = useState([]);
  const [id, setId] = useState();
  const [loading, setLoading] = useState(false)

  console.log('endpoint:', endpoint, 'title:', title)

  useEffect(() => {
    setLoading(true);
    fetch(`https://project-express-api-amd2viobia-nw.a.run.app/${endpoint}`)
      .then((res) => res.json())
      .then((data) => {
        setList(data.body.books);
        setTimeout(() => setLoading(false), 2000);
      })
      .catch((error) => {
        console.error(error);
        setTimeout(() => setLoading(false), 600);
      });
  }, [endpoint]);

  const handleButtonClick = (bookId) => {
    setId(bookId);
    onBookClick(bookId);
    console.log(id)
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="main">
      <h2>{title}</h2>
      {list.map((item) => (
        <div className="list" key={item.bookID}>
          <ul>Id: {item.bookID}</ul>
          <ul>Title: {item.title}</ul>
          <ul>Author: {item.authors}</ul>
          <ul>Average rating: {item.average_rating}</ul>
          <button type="button" className="listbutton" onClick={() => handleButtonClick(item.bookID)}>
            <Link to={`/books/${item.bookID}`}>Read more</Link>
          </button>
        </div>
      ))}
    </div>
  )
}
