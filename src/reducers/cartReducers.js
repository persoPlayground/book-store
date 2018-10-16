const cartReducers =  (state = { cart: []}, action) =>{
    switch(action.type){
        case 'ADD_TO_CART':
        return {...state, cart: [...state.cart, ...action.payload ]}
        case 'DELETE_FROM_CART':
        return { ...state, cart: state.cart.filter(item => item.id !== action.payload[0].id)}
        default:
        return state;
    }
}

export default cartReducers;