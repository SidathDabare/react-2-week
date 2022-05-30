import React, { Component } from 'react'
import { Card, Container } from 'react-bootstrap'
import fantasy from "../books/fantasy.json"

export default class BookTitle extends Component {
    // checkSelected = (value) => (value === this.props.selected ? 'selected' : '')

    render() {
        return (
            <Container
                style={{
                    margin: "5px",
                    width: "300px",
                    justifyContent: "center"

                }}

            >

                {fantasy.map((book) => (
                    <Card
                        key={book.asin}
                        value={book.title}
                        style={{ margin: "10px 0px" }}
                        onClick={(e) => {
                            console.log(e.target = book.asin)
                            this.props.changeSelected(book.asin)
                        }}>
                        <Card.Img
                            variant="top"
                            src={book.img}
                            style={{ width: '100%', backgroundSize: "contain" }} />
                        <Card.Body>
                            <Card.Title className='text-truncate'>{book.title}</Card.Title>
                            <Card.Text className='d-flex justify-content-between'>
                                <span>Category : {book.category}</span>
                                <span>Price : ${book.price}</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))
                }

            </Container>
        )
    }
}
