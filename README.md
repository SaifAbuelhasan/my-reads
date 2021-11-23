# MyReads Project

A project that mocks a book library. It enables the user to find new books through an API, add them to his library, and move them between different shelves.

## Starting the project

To get started:

* install all project dependencies with `yarn install`
* start the development server with `yarn start`

## Files
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms to use with the app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html # DO NOT MODIFY
└── src
    ├── pages
    │   ├── MainPage.js # Homepage component. Shows all user's books in their respective shelves
    │   └── Search.js # Search page. Contains all search logic, and allows user to add new books.
    ├── components
    │   ├── Bookshelf.js # Bookshelf component. Each shelf lists the books that have shelf value = shelf.
    │   └── Book.js # Book Component
    ├── images
    │   └── default-cover.png # Placeholder for books without thumbnail
    ├── App.css # Styles for the app.
    ├── App.js # Root.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Icons for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # DOM rendering
```

## Backend Server

The file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in the app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
