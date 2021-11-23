import React from 'react';
import '../App.css';
import Book from '../components/book';


export default function Bookshelf(props) {
    const name = props.name;
    const books = props.books;
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{name}</h2>
            <div className="bookshelf-books">
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