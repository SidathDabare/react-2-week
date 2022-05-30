import React from 'react'
import { Badge } from 'react-bootstrap'

const MyBadge = ({ color }) => {
    return (
        <Badge variant={color}>
            Primary
        </Badge>
    )
}

export default MyBadge