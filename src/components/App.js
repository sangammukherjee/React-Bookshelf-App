import React from 'react';
import { Route, Switch,Link } from 'react-router-dom';
import * as BooksAPI from '../Api/BooksAPI';
import '../css/App.css';
import BookList from './BookList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Search';
import 'font-awesome/css/font-awesome.min.css';


class BooksApp extends React.Component {
  state = { books: [] };

  componentDidMount() {
    
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  changeShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then(response => {
      changedBook.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books.filter(book => book.id !== changedBook.id).concat(changedBook)
      }));
    });
  };

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        
        <Switch>
          <Route
            path="/search"
            render={() => (
              <Search books={books} changeShelf={this.changeShelf} />
            )}
          />
           
          <Route
            exact
            path="/"
            render={() => (
              <div className="mainWrapper">
                <div className="headerTxt">
                  <h1>Bookshelf</h1>
                  <div className="addNewBooks">
                    <span>Add New Books</span>
                  <Link to="/search">Search</Link>
                </div>
                </div>
                <BookList books={books} changeShelf={this.changeShelf} />
                
              </div>
            )}
          />
         
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
