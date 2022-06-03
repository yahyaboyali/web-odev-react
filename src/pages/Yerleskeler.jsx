import React, { useState,useEffect } from 'react'
import { Row, Col,Table } from 'react-bootstrap'
import CampusService from '../services/CampusService'
export default function Yerleskeler() {
    const [campuses, setcampuses] = useState([]);
    useEffect(() => {
        let campusService = new CampusService();
        campusService.allCampuses().then(
            result=>setcampuses(result.data.data)
        )
    }, [])
    
    return (
        <div>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Yerleşke adı</th>
                                <th>Konum bilgisi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                campuses.map(campuses=>(
                                    <tr key={campuses.id}>
                                        <td>{campuses.name}</td>
                                        <td>{campuses.location}</td>
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
