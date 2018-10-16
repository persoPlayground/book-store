import axios from 'axios';

export const postBooks = (books) =>({ type: 'POST_BOOK', payload: books});
export const deleteBook = (id) =>({ type: 'DELETE_BOOK', payload: id});
export const updateBook = (book) =>({ type: 'UPDATE_BOOK', payload:book});
export const getBooksList = () => async dispatch => {
    const res = await  axios.get('/api/books');
    dispatch ({
        type: 'GET_BOOKS',
        payload: res.data || []
    });
}