import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "./css/ProductsData.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    
    return (
        <div>
            
            <Carousel>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/35b427ad-885b-4412-bc15-12916bf920dc/air-force-1-07-lv8-mens-shoe-pWgd3z.png"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 className="slide-one">Nike Air Force 1 '07 LV8</h3>
                <p className="slide-one">The OG icon you know and love is refreshed with details to highlight the tourney that aims to unify and make NYC basketball the best in the country.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                className="d-block w-100"
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/83d09483-7595-4fcb-bef0-1f68bc0a5a55/air-force-1-07-lv8-mens-shoe-xKjNh7.png"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3 className="slide-one">Nike Air Force 1 '07 LV8</h3>
                <p className="slide-one">The basketball icon that puts a fresh spin on what you know best: crisp leather, bold colors and the perfect amount of flash to make you shine.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ea77cd69-6b01-4063-9ce7-8c050ff91bd2/air-jordan-1-mid-shoe-vnwwTL.png"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3 className="slide-one">Air Jordan 1 Mid</h3>
                <p className="slide-one">The Air Jordan 1 Mid Shoe is inspired by the first AJ1, offering fans of Jordan retros a chance to follow in the footsteps of greatness.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    )
}

