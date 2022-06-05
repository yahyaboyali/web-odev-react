import React, { useState,useEffect } from 'react'
import { Card, Container, Row ,Col, Table} from 'react-bootstrap'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CalendarService from '../services/CalendarService';

export default function Takvim() {
    const [value, onChange] = useState(new Date());
    const [takvim,setTakvim] = useState([]);
    useEffect(() => {
        let takvimServis = new CalendarService();
        takvimServis.allCalendar().then(
            result=> setTakvim(result.data.data)
        )
    }, [])
    
//{"id":1,"name":"Bitirme Sınavı","description":"Yarıyıl/Yıl Sonu Bitirme Sınavları Başlangıcı",
//"date":"2022-05-29T21:00:00.000Z"}
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
                                <th>isim</th>
                                <th>açıklama</th>
                                <th>tarih </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                takvim.map(takvim => (
                                    <tr key={takvim.id}>
                                        <td>{takvim.name}</td>
                                        <td>{takvim.description}</td>
                                        <td>{takvim.date}</td>
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
