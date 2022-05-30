import React, { Component } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import SingleComment from "./SingleComment"


export default class CommentArea extends Component {

    state = {
        isError: false,
        isLoading: true,
        reviews: {
            comment: "",
            rate: 0,

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
    // componentDidUpdate = (prevProps, prevState) => {
    //     console.log('componentDidUpdate fired!')
    //     if (prevProps.selected !== this.props.selected) {
    //         this.fetchComments()
    //     }
    // }
    setLoading = (boolean) => {
        this.setState({
            isLoading: boolean

        })
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        // this.handleChange('elementId', this.props.bookId)

        try {
            const response = await fetch(
                'https://striveschool-api.herokuapp.com/api/comments/',
                {
                    method: 'POST',
                    body: JSON.stringify({ ...this.state.reviews, elementId: this.props.selected }),
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
                this.setState({
                    isLoading: true
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
            <Container style={{
                position: "fixed",
                maxWidth: "30%",
                height: "65vh",
                marginTop: "10px"
            }}>
                <h6 className='border py-1 text-white'>Book Id: {this.props.selected}</h6>
                <SingleComment setLoading={this.setLoading} isLoading={this.state.isLoading} commentId={this.props.selected} />


                <Form onSubmit={this.handleSubmit} className='col-12 d-flex justify-content-between p-0 flex-wrap mx-auto'
                    style={{ maxHeight: "2rem", maxWidth: '95%', position: "absolute", bottom: "0rem" }}>
                    <Form.Group controlId="exampleForm.ControlInput1" className='col-8 p-0'>
                        <Form.Label className='text-white'>Comments</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Add Comments"
                            onChange={(e) => {
                                this.handleChange('comment', e.target.value)
                            }}
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1" className='col-3 p-0'>
                        <Form.Label className='text-white'>Rate</Form.Label>
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

                    <Button variant="info" type="submit" className='col-12 mt-2' >
                        Add your comment!
                    </Button>
                </Form>
            </Container>





        )
    }
}
