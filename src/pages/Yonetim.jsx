import React from 'react'
import { Col, Container, Row,Card } from 'react-bootstrap'
import CardLayout from '../layouts/CardLayout'
export default function Yonetim() {
  return (
    <Container>
            <Card body className="m-3">
                <h1>İdari Birimler</h1>
            </Card>

            <Card body className="m-3">
                <Container>
                    <Row>
                        <Col>
                            <CardLayout title="Rektör" description="rektör açıklaması1" />
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <CardLayout title="Rektör yardımcısı" description="Rektör yardımcısı açıklaması1" />
                        </Col>
                        <Col >
                            <CardLayout title="sekreter" description="sekreter açıklaması2" />
                        </Col>
                        <Col >
                            <CardLayout title="Danışman" description="Danışman açıklaması3" />
                        </Col>
                    </Row>
                </Container>
            </Card>
        </Container>
  )
}
