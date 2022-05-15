import React, { useState } from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Takvim() {
    const [value, onChange] = useState(new Date());

    return (
        <Container>
            <Card body className="m-3">
                <h1>Takvim</h1>
            </Card>

            <Card body className="m-3" style={{ "margin-left": "auto", "margin-right": "auto" }}>
                <Row className="justify-content-center">
                    <Calendar onChange={onChange} value={value} />
                </Row>
            </Card>
        </Container>
    )
}
