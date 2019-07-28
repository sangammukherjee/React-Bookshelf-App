import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from '../Api/BooksAPI';

class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

  state = {
    query: '',
    newBooks: [],
    searchErr: false
  };

  getBooks = event => {
    const query = event.target.value;
    this.setState({ query });

    
    if (query) {
      BooksAPI.search(query.trim(), 20).then(books => {
        books.length > 0? this.setState({ newBooks: books, searchErr: false }): this.setState({ newBooks: [], searchErr: true });
      });

      
    } 
  };

  render() {
    const { query, newBooks, searchErr } = this.state;
    const { books, changeShelf } = this.props;

    return (
      <div className="searchBooksWrapper">
        <div className="searchBooksWrapperBar">
          <Link className="backToHome" to="/">
            Close
          </Link>
          <div className="searchBooksInputWrapper">
            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={this.getBooks}
            />
          </div>
        </div>
        <div className="searchBooksResults">
          {newBooks.length > 0 && (
            <div>
             
              <ol className="booksGrid">
                {newBooks.map(book => (
                  <Book
                    book={book}
                    books={books}
                    key={book.id}
                    changeShelf={changeShelf}
                  />
                ))}
              </ol>
            </div>
          )}
          {searchErr && (
            <h3>Search did not return any books. Please try again!</h3>
          )}
        </div>
      </div>
    );
  }
}
export default Search;
