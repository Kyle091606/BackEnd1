import * as bookModel from '../Models/bookmodels.js';

export const fetchAllBooks = async ()=> {
    const books = await bookModel.fetchAllBooks();
    return books;
}