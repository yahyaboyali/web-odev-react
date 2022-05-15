import React from 'react'
import { Card } from 'react-bootstrap'
export default function CardDuyuru() {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>başlık</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">deneme</Card.Subtitle>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur
                         adipisicing elit. Debitis possimus hic
                          unde aperiam optio eum magni labore velit
                           excepturi totam eligendi commodi obcaecati
                           , provident iusto suscipit quas architecto ea dolorum?
                    </Card.Text>
                    <Card.Link href="#">Duyuru detay</Card.Link>
                </Card.Body>
            </Card>
    </div>
  )
}
