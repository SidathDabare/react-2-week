import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BookTitle from './BookTitle'
import CommentArea from './CommentArea'

export default class BookList extends Component {
    render() {
        return (
            <Container className='bg-dark mt-4'>
                <Row>
                    <Col className='col-6'><BookTitle /></Col>
                    <Col className='col-6'><CommentArea /></Col>
                </Row>


            </Container>
        )
    }
}
