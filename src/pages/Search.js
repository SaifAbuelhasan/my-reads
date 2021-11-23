import React from 'react';
import * as BooksAPI from '../BooksAPI';
import '../App.css';
import { Link } from 'react-router-dom';
import Book from '../components/book';
import { useState } from 'react';
import useConstant  from 'use-constant';
import { useAsync } from 'react-async-hook';
import AwesomeDebouncePromise from 'awesome-debounce-promise';


// Earlier version of the code. Searching went fine as long as you didn't delete characters so fast.
// It kind of broke due to too many api calls.
let debounceTimer;
export default function Search(props) {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);
    
    const clearSearch = () => {
        setBooks([]);
    }

    const updateBooks = (books) => {
        setBooks(books);
    }

    const debounce = (func, query, delay) => {
        console.log('debouncing ', query)
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func(query), delay);
    }

    const search = (query) => {
        console.log('searching', query)
        if(query === '') {
            clearSearch();
            return;
        }
        BooksAPI.search(query)
            .then((data) => {
                if(data.error !== 'empty query') {
                    updateBooks(data);
                }
                else {
                    clearSearch()
                }
            })
            .catch((e) => {
                clearSearch();
            })
    }

    const handleChange = (event) => {
        const query = event.target.value;
        
        setQuery(query);
        debounce(search, query, 550);
    }

    return(
        <div className="search-books">
            <div className="search-books-bar">
            <Link to='/' className="close-search" >Close</Link>
            <div className="search-books-input-wrapper">
                <input value={query} type="text" placeholder="Search by title or author" onChange={handleChange}/>
            </div>
            </div>
            <div className="search-books-results">
            <ol className="books-grid">
                {
                    books.map((book) => {
                        return(
                            <li key={book.id}>
                                <Book book={book} onMove={props.moveToShelf}/>
                            </li>
                        )
                    })
                }
            </ol>
            </div>
        </div>
    )

}



 
/* 
// useDebouncedSearch is a function I found on stackoverflow that solves the issue. Written by Sebastian Lorber.

// Generic reusable hook
const useDebouncedSearch = (searchFunction) => {

    // Handle the input text state
    const [inputText, setInputText] = useState('');
  
    // Debounce the original search async function
    const debouncedSearchFunction = useConstant(() =>
      AwesomeDebouncePromise(searchFunction, 100)
    );
    
    // The async callback is run each time the text changes,
    // but as the search function is debounced, it does not
    // fire a new request on each keystroke
    const searchResults = useAsync(
      async () => {
        if (inputText.length === 0) {
          return [];
        } else {
          return debouncedSearchFunction(inputText);
        }
      },
      [debouncedSearchFunction, inputText]
    );
  
    // Return everything needed for the hook consumer
    return {
      inputText,
      setInputText,
      searchResults,
    };
};

const searchBooks = () => useDebouncedSearch((query) => BooksAPI.search(query));

export default function Search(props) {
    const {inputText, setInputText, searchResults } = searchBooks();
    return(
        <div className="search-books">
            <div className="search-books-bar">
            <Link to='/' className="close-search" >Close</Link>
            <div className="search-books-input-wrapper">
                <input value={inputText} type="text" placeholder="Search by title or author" onChange={e => setInputText(e.target.value)}/>

            </div>
            </div>
            <div className="search-books-results">
            <ol className="books-grid">
                {
                    Array.isArray(searchResults.result) &&
                    (
                        searchResults.result.map((book) => {
                            for(const shelfBook of props.shelfBooks) {
                                if(book.id === shelfBook.id) {
                                    book.shelf = shelfBook.shelf;
                                }
                            }
                            return(
                                <li key={book.id}>
                                    <Book book={book} onMove={props.moveToShelf}/>
                                </li>
                            )
                        })
                    )
                }
            </ol>
            </div>
        </div>
    )
}
 */