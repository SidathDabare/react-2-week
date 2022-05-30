import React, { Component } from 'react'
import { ListGroup, } from 'react-bootstrap'

export default class SingleComment extends Component {
    state = {
        comments: [],

    }

    componentDidMount = () => {
        this.fetchComments()

    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log('componentDidUpdate fired!')
        if (prevProps.commentId !== this.props.commentId) {
            this.fetchComments()

        }
        if (this.props.isLoading) {
            this.fetchComments()

        }

    }

    fetchComments = async () => {
        try {
            const response = await fetch(
                'https://striveschool-api.herokuapp.com/api/comments/' + this.props.commentId,
                {
                    method: 'GET',
                    // body: JSON.stringify(this.state.comments),
                    headers: {
                        'Content-type': 'application/json',
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdjZjg3MzZkMDZiOTAwMTUyZWYyOGMiLCJpYXQiOjE2NTM4MjI1MDEsImV4cCI6MTY1NTAzMjEwMX0.aANlcafrKSWVnXq61ZSmwt-z5lqaExeHLwmdtqQkfiQ"
                    }
                }
            )
            if (response.ok) {

                let data = await response.json()

                this.setState({
                    comments: data,

                })
                this.props.setLoading(false)
            } else {
                console.log('error happened!')
                this.setState({
                    isLoading: false,
                    isError: true,
                })
            }
        } catch (error) {
            console.log(error)
            this.setState({
                isLoading: false,
                isError: true,
            })
        }
    }
    deleteComment = async (url) => {
        try {
            await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdjZjg3MzZkMDZiOTAwMTUyZWYyOGMiLCJpYXQiOjE2NTM4MjI1MDEsImV4cCI6MTY1NTAzMjEwMX0.aANlcafrKSWVnXq61ZSmwt-z5lqaExeHLwmdtqQkfiQ"
                }
            });
            this.props.setLoading(true)
            alert('Comments Deleted..!')
            const resData = 'resource deleted...';
            return resData;
        } catch (error) {
            console.log(error);
        }

    }

    render() {
        return (

            <ListGroup className='col-12 p-0'
                style={{
                    maxWidth: '100%',
                    height: "35rem",

                }}>
                {this.state.comments.slice(0, 10).map((comment, i) => (
                    <ListGroup.Item className='d-flex justify-content-between p-1' key={i}>
                        <span className='text-truncate w-75 text-left'>{comment.comment}</span>
                        <span className='text-truncate w-25'>Rate: {comment.rate} </span>

                        <span>
                            <i className="bi bi-x-square text-danger"
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    this.deleteComment(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`)

                                }}></i>
                        </span>
                    </ListGroup.Item>

                ))}
            </ListGroup>

        )
    }
}