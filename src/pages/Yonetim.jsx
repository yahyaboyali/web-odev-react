import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import CardLayout from '../layouts/CardLayout'
import AdministrativeUnits from '../services/AdministrativeUnits';
export default function Yonetim() {
    const [admins, setadmins] = useState([]);
    useEffect(() => {
        let administrativeUnitService = new AdministrativeUnits();
        administrativeUnitService.alldmins().then(
            result => setadmins(result.data.data)
        )
    }, [])
    return (
        <Container>
            <Card body className="m-3">
                <h1>Yönetim</h1>
            </Card>

            <Card body className="m-3">
                <Container>
                    <Row>
                        {
                            admins.map(admins => (
                                <Col style={{ marginTop: '0.5rem' }} key={admins.id}>
                                    <CardLayout title={admins.name} description={admins.body} linkHref="#haber1" />
                                </Col>
                            ))
                        }
                    </Row>

                </Container>
            </Card>
        </Container>
    )
}
