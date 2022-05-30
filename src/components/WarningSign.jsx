import React from 'react'
import { Alert } from 'react-bootstrap'

const WarningSign = ({ alert }) => {
    return (
        <Alert variant="danger" className='col-8 col-md-5 mx-auto border-2 bg-transparent py-1'>
            <Alert.Heading>{alert}</Alert.Heading>
        </Alert>
    )
}

export default WarningSign