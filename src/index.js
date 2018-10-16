import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import BooksList from './components/pagaes/BooksList';
import rootReducer from './reducers';
import { postBooks, deleteBook, updateBook} from './actions/booksActions';
import { addToCart } from './actions/cartActions';

const middelwares = [logger, thunk];
const store = createStore(rootReducer, applyMiddleware(...middelwares));

// store.dispatch(postBooks(
//     [{
//         id: 1,
//         title: 'book1',
//         des:' some description',
//         price: 111
//     },
//     {
//         id: 2,
//         title: 'book2',
//         des:' some description',
//         price: 222
//     },
//     {
//         id: 3,
//         title: 'book3',
//         des:' some description',
//         price: 333
//     }
// ]
// ));

// store.dispatch(postBooks([{
//     id: 4,
//     title: 'book4',
//     des:' some description',
//     price: 444
// },
// {
//     id: 5,
//     title: 'book5',
//     des:' some description',
//     price: 555
// }
// ]
// ));
// store.dispatch(deleteBook({
//         id:4
//     }
// ));
// store.dispatch(updateBook({
//     id:2,
//     title:'book2_'
// }
// ));


// store.dispatch(addToCart([{
//     id: 2
// }]));

ReactDOM.render(
    <Provider store={store}>
        <BooksList />
    </Provider>,    
    document.getElementById('root')
)