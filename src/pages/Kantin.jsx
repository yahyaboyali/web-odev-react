import React from 'react'
import { Row, Col, Table, Card } from 'react-bootstrap'

export default function Kantin() {
    return (
        <div>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>Fiyat listesi</Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ürün</th>
                                <th>Açıklama </th>
                                <th>Fiyat</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>çay ver</td>
                                <td>200 ml çay</td>
                                <td>1 TL</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>çay verir misin?</td>
                                <td>200 ml çay</td>
                                <td>0.75 TL</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Halil bey müsaitseniz çay rica edebilir miyim? </td>
                                <td>200 ml çay</td>
                                <td>0.25 TL</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    )
}
