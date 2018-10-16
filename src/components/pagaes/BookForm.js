import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Well, Panel, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { postBooks } from '../../actions/booksActions';
class BookForm extends Component{

    state = {
        title: '',
        description: '',
        price: null
    }
    handleOnchange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
   
    render(){
        console.log(this.state);
        return(
            <Well>
                <Panel>
                    <FormGroup>
                        <ControlLabel>Title</ControlLabel>
                        <FormControl 
                        name="title"
                        placeholder="Title"
                        onChange={this.handleOnchange}
                        />
                         <ControlLabel>Descrition</ControlLabel>
                        <FormControl 
                        name="description"
                        placeholder="Descrition"
                        onChange={this.handleOnchange}
                        />
                         <ControlLabel>Price</ControlLabel>
                        <FormControl 
                        name="price"
                        placeholder="Price"
                        onChange={this.handleOnchange}
                        />
                        <Button bsStyle="primary" onClick={() => this.props.postBooks([this.state])}>Save</Button>
                    </FormGroup>
                    
                </Panel>
            </Well>
        )
    }
}

export default connect(null, {postBooks})(BookForm);