import React from 'react'
import { Form } from 'react-bootstrap'

const AddComment = () => {
    return (
        <Form className='col-6 col-sm-4 col-md-6 col-lg-12 bg-dark d-flex justify-content-between'>
            <Form.Group controlId="exampleForm.ControlInput1" className='col-9 p-0'>
                <Form.Label>Comments</Form.Label>
                <Form.Control

                    type="text"
                    placeholder="Add Comments"
                // onChange={(e) => {
                //     setName(e.target.value)
                // }}
                />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1" className='col-2 p-0'>
                <Form.Label>Rate</Form.Label>
                <Form.Control
                    className='p-0'
                    type="number"
                    placeholder="0"
                // onChange={(e) => {
                //     setName(e.target.value)
                // }}
                />
            </Form.Group>

        </Form>
    )
}

export default AddComment