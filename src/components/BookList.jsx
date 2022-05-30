
import React, { Component } from 'react'
import { Container, Form } from 'react-bootstrap'
import fantasy from "../books/fantasy.json"
import SingleBook from './SingleBook'
//import CommentArea from './CommentArea'
class BookList extends Component {
    state = { inputName: "fantasy" }
    handleChange = (propertyToSet, value) => {
        this.setState({
            inputName: {
                ...this.state.inputName,
                [propertyToSet]: value,
            },

        })
    }

    render() {
        return (
            <>

                <Form className='col-10 col-md-8 mx-auto d-flex'>
                    <Form.Group controlId="exampleForm.ControlInput1" className='col-6'>
                        <Form.Label>Book title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Insert book title"

                            onChange={(e) => {
                                this.handleChange('inputName', e.target.value)
                            }}

                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1" className='col-6'>
                        <Form.Label>Select by category</Form.Label>
                        <Form.Control
                            as="select"
                            onChange={(e) => {
                                let category = e.target.value
                                console.log(category)

                            }}

                        >
                            <option>fantasy</option>
                            <option>history</option>
                            <option>horror</option>
                            <option>romance</option>
                            <option>scifi</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Container className='col-11 d-flex flex-wrap justify-content-between align-items-center'>
                    {/* {this.state.inputName.filter((book) => {
                        if (this.setState.inputName.value === "") {
                            return book
                        } else if (book.title.toLowerCase().includes(book.toLowerCase())) {
                            console.log(book);
                            return book
                        }
                    }).map((book) => {
                        <SingleBook
                            key={book.asin}
                            image={book.img}
                            name={book.title}
                            price={book.price}
                            asin={book.asin}
                            category={book.category}
                        />
                    })} */}
                    {fantasy.map((book) => (
                        <SingleBook
                            key={book.asin}
                            image={book.img}
                            name={book.title}
                            price={book.price}
                            asin={book.asin}
                            category={book.category}
                        />

                    ))}

                </Container>
            </>


        )
    }






}

export default BookList