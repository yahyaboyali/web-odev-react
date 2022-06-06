import React, { useEffect, useState } from 'react'
import { Col, Row, Table } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import DepartmentService from '../../services/DepartmentService';

export default function Department() {
    let { id } = useParams();
    const [department, setdepartment] = useState([]);
    console.log(id);
    useEffect(() => {
        let departmentService = new DepartmentService();
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
                                department.map((dep, index) => (
                                    <tr key={dep.id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <Link to={`/Department-Slides/${dep.id}`}>{dep.name}</Link>
                                        </td>
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
