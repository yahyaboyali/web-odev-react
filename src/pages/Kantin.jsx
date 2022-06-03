import React, { useState,useEffect } from 'react'
import { Row, Col, Table, Card } from 'react-bootstrap'
import CanteenService from '../services/CanteenService'

export default function Kantin() {
    const [products, setproducts] = useState([])
    useEffect(() => {
      let kantinservis = new CanteenService();
        kantinservis.getAll().then(
            result=>setproducts(result.data.data)
        )
    }, [])
    
    return (
        <div>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h3>Fiyat Listesi</h3>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Ürün</th>
                                <th>Açıklama </th>
                                <th>Fiyat</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            products.map(products => (
                                <tr key={products.id}>
                                    <td>{products.brand}</td>
                                    <td>{products.name}</td>
                                    <td>{products.price}</td>
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
