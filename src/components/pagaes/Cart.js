import React from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';
import { delteFromCart} from '../../actions/cartActions';
import CartItem from './CartItem';

class Cart extends React.Component{

render(){
    const { cart } = this.props;
    return(
       <div>{cart.length !== 0 && <Panel bsStyle="primary">
        <Panel.Heading>Cart</Panel.Heading>
        <Panel.Body> {cart.map(item=> <CartItem key={item.id} {...item}  delteFromCart={this.props.delteFromCart} />)}</Panel.Body>
       </Panel>
       }</div>
    )
}
}

const mapStateToPops = ({cart}) => ({ cart: cart.cart});

export default connect(mapStateToPops, { delteFromCart })(Cart);


// DELET ADD CART AND QUANTITY : FREELANCE IT