const booksReducers = (state = {books:[]}, action) => {
    switch(action.type){
        case 'GET_BOOKS':
        return { ...state, books: [...state.books, ...action.payload]}
        case 'POST_BOOK':
        return { ...state, books: [...state.books, ...action.payload]}
        case 'DELETE_BOOK':
        return {...state, books: state.books.filter(({ id }) => id !== action.payload.id )};
        case 'UPDATE_BOOK':
        return state.books.map(book => book.id === action.payload.id ? {...book, ...action.payload} : book );
        default:
        return state;
    }
}

export default booksReducers ;