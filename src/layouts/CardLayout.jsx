import React from 'react'
import { Card } from 'react-bootstrap'

export default function CardLayout(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>haber başlığı</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">haber</Card.Subtitle>
                    <Card.Text>
                        Lorem, ipsum dolor sit amet consectetur 
                        adipisicing elit. Quaerat nesciunt mod
                        i nostrum repellendus cupiditate aliquid,
                         consequuntur
                         sed tempore earum aperiam doloremque! 
                         Et soluta totam molestias, numquam autem ipsam vel minus.  
                    </Card.Text>
                    <Card.Link href="#">Haber detay</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}
