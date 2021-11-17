import React, { Component } from 'react';
import '../App.css';
import Book from '../components/book';


class Bookshelf extends Component {
    render() {
        const name = this.props.name;
        const books = this.props.books;
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{name}</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        books.map((book) => {
                            return(
                            <li key={book.id}>
                                <Book book={book} />
                            </li>
                            )
                        })
                    }
                </ol>
                </div>

            </div>
        )
    }
}

export default Bookshelf;