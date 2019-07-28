import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ShelfChanger extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

  updateShelf = event =>
    this.props.changeShelf(this.props.book, event.target.value);

  render() {
    const { book, books } = this.props;

    
    let currentShelf = 'none';

    
    for (let item of books) {
      if (item.id === book.id) {
        currentShelf = item.shelf;
        break;
      }
    }

    return (
      <div className="bookShelfChanger">
        <select onChange={this.updateShelf} defaultValue={currentShelf}>
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ShelfChanger;
