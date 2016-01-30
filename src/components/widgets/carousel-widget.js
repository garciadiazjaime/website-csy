'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Carousel = rb.Carousel;
var CarouselItem = rb.CarouselItem;
var Link = ReactRouter.Link;

var CarouselWidget = React.createClass({

    mixins : [ReactRouter.Navigation],

    render: function() {

        return (
            <Carousel id="carouselWidget" interval={70000} nextIcon={<span className="carousel-next"></span>} prevIcon={<span className="carousel-prev"></span>}>
                <CarouselItem id="homeCarousel-slider1" className="slider">
                    <div className="container">
                        <Row>
                            <Col xs={12} sm={5}>
                                <span className="logo20yearsImage"></span>
                            </Col>
                            <Col xs={12} sm={7}>
                                <h1>Enjoy your tech<br />enjoy home</h1>
                                <Link to="contact" title="Contact Us" className="button">Contact us</Link>
                            </Col>
                        </Row>
                     </div>
                </CarouselItem>
                <CarouselItem id="homeCarousel-slider2" className="slider">
                    <div className="container">
                        <Row>
                            <Col xs={12} sm={5}>
                                <span className="logo20yearsImage"></span>
                            </Col>
                            <Col xs={12} sm={7}>
                                <h1>Smart living<br />made easy</h1>
                                <Link to="contact" title="Contact Us" className="button">Contact us</Link>
                            </Col>
                        </Row>
                     </div>
                </CarouselItem>
                <CarouselItem id="homeCarousel-slider3" className="slider">
                    <div className="container">
                        <Row>
                            <Col xs={12} sm={5}>
                                <span className="logo20yearsImage"></span>
                            </Col>
                            <Col xs={12} sm={7}>
                                <h1>Seamless technology<br />integration experience</h1>
                                <Link to="contact" title="Contact Us" className="button">Contact us</Link>
                            </Col>
                        </Row>
                     </div>
                </CarouselItem>
                <CarouselItem id="homeCarousel-slider4" className="slider">
                    <div className="container">
                        <Row>
                            <Col xs={12} sm={5}>
                                <span className="logo20yearsImage"></span>
                            </Col>
                            <Col xs={12} sm={7}>
                                <h1>Sit back, relax<br />and enjoy!</h1>
                                <Link to="contact" title="Contact Us" className="button">Contact us</Link>
                            </Col>
                        </Row>
                     </div>
                </CarouselItem>
                <CarouselItem id="homeCarousel-slider5" className="slider">
                    <div className="container">
                        <Row>
                            <Col xs={12} sm={5}>
                                <span className="logo20yearsImage"></span>
                            </Col>
                            <Col xs={12} sm={7}>
                                <h1>Your comfort,<br />our priority</h1>
                                <Link to="contact" title="Contact Us" className="button">Contact us</Link>
                            </Col>
                        </Row>
                     </div>
                </CarouselItem>

            </Carousel>
        );
    }
});

module.exports = CarouselWidget;
