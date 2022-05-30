import React, { Component } from 'react'
import { Card, Container } from 'react-bootstrap'
import fantasy from "../books/fantasy.json"

export default class BookTitle extends Component {

    render() {
        return (
            <Container
                style={{
                    margin: "5px",
                    width: "500px",
                    height: "78vh",
                    overflowY: "scroll"
                }}
            >
                {fantasy.map((book) => (
                    <Card
                        key={book.asin}
                        value={book.title}
                        style={{ width: "250px", margin: "10px auto" }}
                        onClick={(e) => {
                            // console.log(e.target = book.asin)
                            this.props.changeSelected(book.asin)
                        }}
                    >
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
