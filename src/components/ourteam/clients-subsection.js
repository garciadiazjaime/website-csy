'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Carousel = rb.Carousel;
var CarouselItem = rb.CarouselItem;
var Link = ReactRouter.Link;


var ClientsSubsection = React.createClass({

    render: function() {

        return (
        	<div id="clients-say">
	            <div className="container">
	                <Row>
	                    <Col xs={12} className="clients">
	                        <h1> What our clients say about us </h1>
	                        <hr />
	                    </Col>
	                    <Col sm={3} md={4} className="clientsicon hidden-xs">
	                        <span></span>
	                    </Col>
	                    <Col xs={12} sm={7} md={7} className="clientsdescription">
                          <Carousel interval={9000} controls={false}>
                            <CarouselItem>
                                <p>
                                    We just returned from our home in Cabo so I wanted send you a "Job Well Done" note. <br />
                                    The Savant system you installed is working great.  Even as sophisticated as it is and with so many options, the ease of using the Savant apps on my ipad or iphone makes managing the system a breeze.  It is a very impressive automation system.  Your team at Cabo Systems did a great job of being on the ground from day one of our remodel which allowed the balance of the contractors to do their work without delay.  Your back-up and support after the project was complete was very commendable. <br />
                                    Thanks for all the work you and your team did.  We look forward to having our home managed by a great system.
                                </p>
                                <br />
                                <p>Jack</p>
                                <p>Homeowner at Villas del Mar</p>
                            </CarouselItem>
                            <CarouselItem>
                                <p>
                                    When we first talked about the re-work of all our electronics due to the hurricane last September, I was very comfortable with the quality of the proposed equipment from Cabo Systems.  It was all brands that I knew to be “top of the line.” <br />
                                    However, the big surprise has been the quality of your installation staff.  They spent a lot of time pulling all new cable and making new connections for the electronics.  The Cabo Systems staff has been very patient while retraining me to the new system — they made it easier and simpler to use the new equipment.  Also, when I have had a problem (usually an operator error) the response time has been very impressive.
                                </p>
                                <p>Thanks for building a great and dependable company.</p>
                                <br />
                                <p>Tom</p>
                                <p>Homeowner at Villas del Mar</p>
                            </CarouselItem>
                            <CarouselItem>
                                <p>
                                    You will not find a better audio/visual company anywhere in Los Cabos, I have several very satisfied clients and I even had my own home electronically updated by the always professional, knowledgeable and courteous staff at Cabo Systems (they even slip on those little hospital booties when they enter your home, now that&#44;s professional!).
                                </p>
                                <br />
                                <p>Michael Miller</p>
                                <p>Snell Real Estate</p>
                            </CarouselItem>
                          </Carousel>
	                    </Col>
	                </Row>
	            </div>
	        </div>
        );
    }
});

module.exports = ClientsSubsection;
