import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Bookshelf from '../components/Bookshelf';

class MainPage extends Component {
    render() {
        const books = this.props.books;
        return(
            <div className="app">
                <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    
                    <Bookshelf name='Currently Reading' books={books.filter((book) => (book.shelf === 'currentlyReading'))} />
                    <Bookshelf name='Want To Read' books={books.filter((book) => (book.shelf === 'wantToRead'))} />
                    <Bookshelf name='Read' books={books.filter((book) => (book.shelf === 'read'))} />
                </div>
                <div className="open-search">
                    <Link className="open-search-button" to='/search'>Add a book</Link>
                </div>
                </div>
            </div>
        )
    }
}

export default MainPage;