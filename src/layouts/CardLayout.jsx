import React from 'react'
import { Card } from 'react-bootstrap'

export default function CardLayout() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Haber başlığı</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Haber içeriği</Card.Subtitle>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eaque mollitia nihil delectus id vitae,
                        cupiditate unde cum neque excepturi veniam impedit
                        voluptas reiciendis velit culpa at optio tempora
                        minima? Vitae.
                    </Card.Text>
                    <Card.Link href="#">Haber detay</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}
