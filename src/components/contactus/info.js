'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Button = rb.Button;

var ContactForm = require('./form');

var HelloPanel = React.createClass({

    mixins : [ReactRouter.Navigation],
    
    handleClick: function(){
        console.log('handleClick');
        // this.transitionTo('home');
    },

    render: function() {

        return (
            <section id="contactInfo">
                <div id="map">
                    <a href="https://www.google.com.mx/maps/place/CaboSystems/@23.062624,-109.703629,17z/data=!3m1!4b1!4m2!3m1!1s0x86af5a789bea345d:0xe5733bd3382376a8?hl=en" target="_blank" title="See on google maps">
                        <span>See on google maps</span>
                    </a>
                </div>
                <div className="container">
                    <Row>
                        <Col xs={10} sm={6}>
                            <h2>Contact Information</h2>
                            <br />
                            <ul>
                                <li>
                                    <b>Visit Us</b> <br /><br />
                                    Blvd. Mauricio Castro #609, Col. Chulavista,<br />
                                    San José del Cabo BCS, Mx. 23443
                                </li>
                                <li>
                                    <br /><b>Give Us a Call</b> <br /><br />
                                    Mex. &nbsp;&nbsp; <a href="tel:6241469050" tel="Give Us a Call">(624)146 9050</a><br />
                                    Us. &nbsp;&nbsp; <a href="tel:6195122674" tel="Give Us a Call">(619) 512 2674</a><br />
                                </li>
                                <li className="email">
                                    <br /><b>Email Us</b> <br /><br />
                                    <a href="mailto:info@csy.mx" tel="email us">info@csy.mx</a>
                                </li>
                            </ul> 
                        </Col>
                        <Col xs={10} sm={6} xsOffset={1} smOffset={0} id="contactform">
                            <ContactForm />   
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
});

module.exports = HelloPanel;
