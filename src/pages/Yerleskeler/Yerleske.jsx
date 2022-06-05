import React, { useState, useEffect } from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import FacultiesService from '../../services/FacultiesService';

export default function Yerleske() {
    let { id } = useParams();
    const [Fakulteler, setFakulteler] = useState([]);

    useEffect(() => {
        let fakulteService = new FacultiesService();
        fakulteService.getOneFaculty(id)
            .then(result => {
                console.log('fakulteService', result.data);
                setFakulteler(result.data.data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>isim</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Fakulteler.map(Fakulteler => (
                                    <tr key={Fakulteler.id}>
                                        <td>{Fakulteler.name}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    )
}
