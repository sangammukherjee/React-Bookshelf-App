import React from 'react';
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger';


const Book = props => {
  const { book, books, changeShelf } = props;

 
  const coverImg = book.imageLinks.thumbnail
  

  return (
    <li>
      <div className="book">
        <div className="bookTop">
          <div
            className="bookCover"
            style={{ backgroundImage: `url(${coverImg})` }}
          />
         
          
          <ShelfChanger book={book} books={books} changeShelf={changeShelf} />
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};

export default Book;
