import React, { Component } from 'react'
import { Button, Container, Form, ListGroup } from 'react-bootstrap'
// import AddComment from './AddComment'
// import CommentList from './CommentList'
import SingleComment from './SingleComment'

class CommentArea extends Component {

    state = {
        reviews: {
            comment: "",
            rate: 0,
            elementId: this.props.bookId,
        }
    }
    handleChange = (propertyToSet, value) => {
        this.setState({
            reviews: {
                ...this.state.reviews,
                [propertyToSet]: value,
            },

        })
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        // this.handleChange('elementId', this.props.bookId)

        try {
            const response = await fetch(
                'https://striveschool-api.herokuapp.com/api/comments/?' + this.props.bookId,
                {
                    method: 'POST',
                    body: JSON.stringify(this.state.reviews),
                    headers: {
                        'Content-type': 'application/json',
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdjZjg3MzZkMDZiOTAwMTUyZWYyOGMiLCJpYXQiOjE2NTM4MjI1MDEsImV4cCI6MTY1NTAzMjEwMX0.aANlcafrKSWVnXq61ZSmwt-z5lqaExeHLwmdtqQkfiQ"
                    }
                }
            )
            console.log('job done!')
            //console.log(response)
            if (response.ok) {

                alert('Comments saved!')
                this.setState({
                    comment: {
                        comment: "",
                        rate: 0,
                        elementId: "",
                    }
                })
            } else {
                alert('something went wrong with the operation')
            }
        } catch (error) {
            console.log(error)

        }
    }

    render() {
        return (
            <>
                <Container className='col-6 p-1'
                    style={{
                        maxWidth: '13rem',
                        height: "25rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}>


                    <h6 className='border py-1'>Book Id : {this.props.bookId}</h6>
                    <SingleComment commentId={this.props.bookId} />


                    <Form onSubmit={this.handleSubmit} className='col-12 d-flex justify-content-between p-0 flex-wrap mx-auto'
                        style={{ maxHeight: "2rem", maxWidth: '95%', position: "absolute", bottom: "6rem" }}>
                        <Form.Group controlId="exampleForm.ControlInput1" className='col-8 p-0'>
                            <Form.Label>Comments</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Add Comments"
                                onChange={(e) => {
                                    this.handleChange('comment', e.target.value)
                                }}
                            />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1" className='col-3 p-0'>
                            <Form.Label>Rate</Form.Label>
                            <Form.Control
                                className='p-1'
                                type="number"
                                placeholder="0"
                                min="1" max="5"
                                onChange={(e) => {
                                    this.handleChange('rate', e.target.value)
                                }}
                            />
                        </Form.Group>

                        <Button variant="info" type="submit" className='col-12' >
                            Add your comment!
                        </Button>
                    </Form>

                </Container>

            </>

        )
    }

}

export default CommentArea