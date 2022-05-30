import React from 'react'
import { Button, Card, Container, Form, ListGroup, NavLink } from 'react-bootstrap'
import CommentArea from './CommentArea'

const SingleBook = ({ image, name, price, asin, category }) => {
    return (
        <Container style={{ width: "27rem", display: "flex", backgroundColor: "gray", margin: "5px" }}>
            <Card
                className='col-6 p-0'
                style={{
                    maxWidth: '13rem',
                    height: "25rem",
                    backgroundSize: "contain",
                }}>
                <Card.Img
                    className='p-0'
                    variant="top"
                    src={image}
                    style={{ width: '100%', backgroundSize: "contain" }} />
                <Card.Body
                    style={{
                        position: "absolute",
                        maxWidth: "100%",
                        bottom: 0,
                        lineHeight: "15px",
                        backgroundColor: "white",
                        padding: "0 5px"
                    }}
                >
                    <Card.Text className='text-secondary text-truncate '>{name}</Card.Text>
                    <Card.Title className='p-0'>$ {price}</Card.Title>
                    <Card.Text className='text-truncate py-0'>
                        {/* <small className='font-weight-bold text-secondary'>Id : {asin}</small><br></br> */}
                        <small className='font-weight-bold  text-secondary' >Category : {category}</small>
                    </Card.Text>

                </Card.Body>

            </Card >
            <CommentArea bookId={asin} />
        </Container>
    )
}

export default SingleBook