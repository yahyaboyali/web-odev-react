import React from 'react'
import { Row, Col,Table,Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
export default function Yerleskeler() {
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
                            <tr>
                                <td> <Nav.Link as={Link} to="/Yerleskeler/Besiktas">Beşiktaş</Nav.Link>
                                    </td>
                                <td>Konum bilgisi</td>
                            </tr>
                            <tr>
                                <td><Nav.Link as={Link} to="/Yerleskeler/Kadikoy">Kadıköy</Nav.Link></td>
                                <td><a href='https://goo.gl/maps/AftEatw3W66jnCaUA'  target="_blank" rel="noreferrer">konum</a></td>
                            </tr>
                            <tr>
                                <td><Nav.Link as={Link} to="/Yerleskeler/Sariyer">Sarıyer</Nav.Link></td>
                                <td><a href='https://goo.gl/maps/AftEatw3W66jnCaUA'  target="_blank" rel="noreferrer">konum</a></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    )
}
