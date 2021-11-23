import React, { Component } from 'react';
import '../App.css';
import cover from '../images/default-cover.png';


export default function Book(props) {
    const book = props.book;
    return(
        <div className="book">
            <div className="book-top">
                {book.imageLinks 
                ?
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                :
                <div className="book-cover" style={{ backgroundSize: 'cover', width: 128, height: 193, backgroundImage: `url(${cover})` }}></div>
                }
                <div className="book-shelf-changer">
                <select value={book.shelf ? book.shelf : 'none'} onChange={(event) => {props.onMove(book, event.target.value)}}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            {
                book.authors &&
                book.authors.map((author) => {
                    return(
                        <div className="book-authors" key={author}>{author}</div>
                    )
                })
            }
            
        </div>       
    )
    
}
