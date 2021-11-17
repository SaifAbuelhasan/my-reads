import React from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Search from './pages/Search';


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: false
    books: [],
    found: []
  }

  componentDidMount() {

    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books: books
        }))
      })

    // BooksAPI.search('Linux')
    // .then((books) => {
    //   this.setState(() => ({
    //     found: books
    //   }))
    // })
  }

  render() {
    console.log(this.state.books)
    return (
      
        <Routes>
          <Route exact path='/' element={<MainPage books={this.state.books}/>}/>
          <Route path='/search' element={<Search />} />
        </Routes>
    )
  }
}

export default BooksApp
