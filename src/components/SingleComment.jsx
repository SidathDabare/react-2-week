import React, { Component } from 'react'
import { ListGroup, Spinner, Alert } from 'react-bootstrap'

export default class SingleComment extends Component {
    state = {
        comments: [],
    }
    deleteComment = async (url) => {

        await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdjZjg3MzZkMDZiOTAwMTUyZWYyOGMiLCJpYXQiOjE2NTM4MjI1MDEsImV4cCI6MTY1NTAzMjEwMX0.aANlcafrKSWVnXq61ZSmwt-z5lqaExeHLwmdtqQkfiQ"
            }
        });


        const resData = 'resource deleted...';

        return resData;
    }
    componentDidMount = () => {
        this.fetchReservations()
    }
    fetchReservations = async () => {
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
            //console.log(response)
            if (response.ok) {
                // server answered with 200! :)
                let data = await response.json() // this gets the body out of the response, in order to use it!
                // console.log('RESERVATIONS LIST!: ', data)
                // we have to use setState in order to change the state object!
                this.setState({
                    comments: data,
                    isLoading: false,
                })
            } else {
                // server answered with an error code! :(
                console.log('error happened!')
                this.setState({
                    isLoading: false,
                    isError: true,
                })
            }
        } catch (error) {
            // falling here if we're not able to contact the server at all
            // (network issues?)
            console.log(error)
            this.setState({
                isLoading: false,
                isError: true,
            })
        }
    }


    render() {
        return (

            <ListGroup className='col-12 p-0'
                style={{
                    maxWidth: '13rem',
                    height: "25rem",

                }}>
                {this.state.comments.slice(0, 5).map((comment, i) => (
                    <ListGroup.Item className='d-flex justify-content-between p-1' key={i}>
                        <span className='text-truncate w-75 text-left'>{comment.comment}</span>
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
