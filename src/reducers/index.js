import { combineReducers } from 'redux';
import books from './booksReducers';
import cart from './cartReducers';

export default combineReducers({
    books,
    cart
})