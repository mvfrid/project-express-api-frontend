/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Spinner } from './Spinner';

export const SingleItem = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false)
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`https://project-express-api-amd2viobia-nw.a.run.app/books/${(id)}`)
      .then((res) => res.json())
      .then((data) => {
        setList(data.body.book);
        setLoading(false);
        console.log('data.body.book', data.body.book)
        console.log('list', list)
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  console.log('list outside useffect', list)

  const navigate = useNavigate();
  const onClickGoBack = () => {
    navigate(-1);
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="main">
      <p>Information about one book:</p>
      <div className="list">
        <ul>Id: {list.bookID}</ul>
        <ul>Title: {list.title}</ul>
        <ul>Author: {list.authors}</ul>
        <ul>Average rating: {list.average_rating}</ul>
        <ul>Numbers of ratings: {list.ratings_count}</ul>
        <ul>ISBN code: {list.isbn}</ul>
        <ul>Language code: {list.language_code}</ul>
        <ul>Number of pages: {list.num_pages}</ul>
        <button type="button" onClick={onClickGoBack}>Go back</button>
      </div>
    </div>
  );
}
