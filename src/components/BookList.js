import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

const BookList = props => {
  const { books, changeShelf } = props;
  const shelfTypes = [
    { type: 'currentlyReading', title: 'Currently Reading' },
    { type: 'wantToRead', title: 'Want to Read' },
    { type: 'read', title: 'Read' }
  ];

  return (
    <div className="bookListContent col-md-12">
      {shelfTypes.map((shelf, index) => {
        const shelfBooks = books.filter(book => book.shelf === shelf.type);
        return (
          <div className="bookshelf col-md-4 col-xs-12" key={index}>
            <h2 className="bookshelfTitle">{shelf.title}</h2>
            <div className="bookshelfBooks">
              <BookShelf books={shelfBooks} changeShelf={changeShelf} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};

export default BookList;
