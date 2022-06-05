import React, { useState, useEffect } from 'react'
import { Col, Row, Table, Nav } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';
import CardLayout from '../../layouts/CardLayout';
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
            <h1>Yerleşke</h1>
            {
                Fakulteler.map(Fakulteler => (
                    <Col style={{ marginTop: '0.5rem' }} key={Fakulteler.id}>
                        <CardLayout title={Fakulteler.name} linkHref="#haber1" />
                    </Col>
                ))
            }
        </div>
    )
}
