import React, { useEffect, useState } from 'react'
import { Col, Row, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import DepartmenService from '../../services/DepartmentService';

export default function Department() {
    let { id } = useParams();
    let i=0;
    const [department, setdepartment] = useState([]);
    console.log(id);
    useEffect(() => {
        let departmentService = new DepartmenService();
        departmentService.getDepartmentByFacultyId(id)
            .then(result => {
                console.log('departmentservice', result.data);
                setdepartment(result.data.data);
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
                                <th>Bölümler</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                department.map(department => (
                                    <tr key={department.id}>
                                        <td>{++i}</td>
                                        <td>{department.name}</td>
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
