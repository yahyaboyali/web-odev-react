import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import DepartmentService from '../../services/DepartmentService';

export default function DepartmentSlides() {
    let { id } = useParams();
    const [slides, setSlides] = useState([]);
    console.log(id);
    useEffect(() => {
        let departmentService = new DepartmentService();
        departmentService.getDepartmentSlides(id)
            .then(result => {
                console.log('departmentSlides', result.data);
                setSlides(result.data.data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h2>Bölüm Sayfası</h2>

            <div style={{ marginTop: '1rem' }}>
                <Carousel>
                    {
                        slides.map((each, index) => (
                            <Carousel.Item key={parseInt(Math.random() * 1000) + index} interval={1000}>
                                <img
                                    className="resim"
                                    src={each.url}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}
