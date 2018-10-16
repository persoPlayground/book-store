import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

import { getBooksList } from '../../actions/booksActions';
import { addToCart } from '../../actions/cartActions';
import BookItem from './BookItem';
import BookForm from './BookForm';
import Cart from './Cart';


class BooksList extends React.Component {
    state= {
        added:[]
    }
    componentDidMount(){
        this.props.getBooksList();
    }
    addBookTocart = (book) =>{
        const added = [... this.state.added, book[0].id]
        this.setState({added})
        this.props.addToCart(book)
    }
    render(){
        console.log(this.state)
        const {books} = this.props;
        return(
            <Grid >
                <Row>
                    <Cart />
                </Row>
                 <Row >
                     <Col xs={12} sm={6}>
                        <BookForm />
                     </Col>
                    {books.map(book=><Col xs={12} sm={6} md={4} key={book.id}><BookItem added={this.state.added} {...book} addToCart={this.addBookTocart} /></Col>)}
                 </Row>
            </Grid>
        )
    }
}
const mapStateToProps = ({books}) => ({ books: books.books });
export default connect(mapStateToProps, { getBooksList, addToCart })(BooksList);