import React from 'react'
import { Card, Container, Col, Row } from 'react-bootstrap'
import CardLayout from '../layouts/CardLayout'

export default function IdariBirimler() {
    return (
        <Container>
            <Card body className="m-3">
                <h1>İdari Birimler</h1>
            </Card>

            <Card body className="m-3">
                <Container>
                    <Row>
                        <Col>
                            <CardLayout title="Idari1" description="Idari açıklaması1" />
                        </Col>
                        <Col >
                            <CardLayout title="Idari2" description="Idari açıklaması2" />
                        </Col>
                        <Col >
                            <CardLayout title="Idari3" description="Idari açıklaması3" />
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <CardLayout title="Idari1" description="Idari açıklaması1" />
                        </Col>
                        <Col >
                            <CardLayout title="Idari2" description="Idari açıklaması2" />
                        </Col>
                        <Col >
                            <CardLayout title="Idari3" description="Idari açıklaması3" />
                        </Col>
                    </Row>
                </Container>
            </Card>
        </Container>
    )
}
