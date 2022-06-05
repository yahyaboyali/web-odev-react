import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Table } from 'react-bootstrap';
import CalendarService from '../services/CalendarService';

export default function Takvim() {
    const [takvim, setTakvim] = useState([]);

    useEffect(() => {
        let takvimServis = new CalendarService();
        takvimServis.allCalendar().then(
            result => setTakvim(result.data.data)
        )
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h3>Akademik takvim</h3>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>İsim</th>
                                <th>Açıklama</th>
                                <th>Tarih </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                takvim.map(takvim => (
                                    <tr key={takvim.id}>
                                        <td>{takvim.name}</td>
                                        <td>{takvim.description}</td>
                                        <td>{new Date(takvim.date).toLocaleDateString()}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}
