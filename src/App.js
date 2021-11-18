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
  
  moveToShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        this.setState((prevState) => {
          const books = prevState.books;
          const index = books.indexOf(book);
          return {
            books: [
              ...books.slice(0, index),
              {...book, shelf: shelf},
              ...books.slice(index+1)
            ]
          }
        })
      })
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books: books
        }))
      })
  }

  render() {
    return (
      
        <Routes>
          <Route exact path='/' element={<MainPage books={this.state.books} moveToShelf={this.moveToShelf}/>}/>
          <Route path='/search' element={<Search />} />
        </Routes>
    )
  }
}

export default BooksApp
