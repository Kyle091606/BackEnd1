import * as bookModel from '../Models/bookmodels.js';

export const fetchAllBooks = async ()=> {
    const books = await bookModel.fetchAllBooks();
    return books;
}

export const createBook = async (book) => {
    const bookId = await bookModel.insert(book);
    return bookId;
}