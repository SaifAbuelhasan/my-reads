import React from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Search from './pages/Search';


class BooksApp extends React.Component {
  state = {
    books: [],
  }
  getAllBooks = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books: books
        }))
      })
  }
  moveToShelf = (book, shelf) => {
    if(book.shelf) {
      const books = [...this.state.books];
      const index = books.indexOf(book);
      books[index].shelf = shelf;
      this.setState(() => ({
        books
      }))
      BooksAPI.update(book, shelf);
    } 
    else {
      BooksAPI.update(book, shelf)
        .then(() => {
          this.getAllBooks()
        })
    }
    
  }

  componentDidMount() {
    this.getAllBooks();
  }

  render() {
    return (
      
        <Routes>
          <Route exact path='/' element={<MainPage books={this.state.books} moveToShelf={this.moveToShelf}/>}/>
          <Route path='/search' element={<Search moveToShelf={this.moveToShelf} shelfBooks={this.state.books}/>} />
        </Routes>
    )
  }
}

export default BooksApp
