# MyReads Project
This project forms the final assessment project for Udacity's React Fundamentals course, and was built on top of a started template provided by them. This provided a static version of the CSS and HTML mark up, without any of the React code necessary to complete the project. 

## The Project Brief
The brief was to create a bookshelf app to allow a user to select and categorise books which they have read, are currently reading, or want to read. The app should have two pages: the main page shows the books which have been put on shelves, and the search page allows the user to search for other books and put them on shelves.


## My Ambitions for the Project
My goals for this project were to practice:
* How to structure the repository of a React app
* Splitting an application into components
* Setting up an application's routing with `react-router`
* Effectively consuming a client API
* Managing state through an application
* Setting up commands such as `npm run prettier-fix`

This project was both an assessment and a learning exercise. Any feedback is greatly appreciated.


## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

The commands you may need first are:
* `npm install` - to install all project dependencies
* `npm start` - to start the development server

## Backend Server

To simplify the development process, Udacity provided a backend server to develop against. [`BooksAPI.js`](src/BooksAPI.js) contains the methods used to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

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
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

### Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, random words may return no results.
