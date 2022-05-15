import React from 'react'
import { Card } from 'react-bootstrap'

export default function CardLayout(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{ props.title }</Card.Title>
                    <Card.Text>{ props.description }</Card.Text>
                    <Card.Link href={ props.linkHref }>{ props.linkText }</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}
