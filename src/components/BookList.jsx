import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BookTitle from './BookTitle'
import CommentArea from './CommentArea'

export default class BookList extends Component {
    state = {
        selected: undefined,
    }

    changeSelected = (newSelectedValue) => {
        this.setState({
            selected: newSelectedValue,
        })
    }

    render() {
        return (
            <Container className='bg-dark mt-4' variant="success" style={{
                height: "80vh",
                overflowY: "scroll"
            }}>
                {this.props.selected}
                <Row>
                    <Col className='col-6'>
                        <BookTitle selected={this.state.selected}
                            changeSelected={this.changeSelected}
                        />
                    </Col>
                    <Col className='col-6'>
                        <CommentArea selected={this.state.selected}
                            changeSelected={this.changeSelected} />
                    </Col>
                </Row>


            </Container>
        )
    }
}
