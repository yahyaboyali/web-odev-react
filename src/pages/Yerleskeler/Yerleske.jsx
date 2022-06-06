import React, { useState, useEffect } from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';
import FacultiesService from '../../services/FacultiesService';

export default function Yerleske() {
    let { id } = useParams();
    let i =0;
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
                                <th>#</th>
                                <th>isim</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Fakulteler.map(Fakulteler => (
                                    <tr key={Fakulteler.id}>
                                        <td>{++i}</td>
                                        <td><Link to={`/Department/${Fakulteler.id}`}>{Fakulteler.name}</Link></td>
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
