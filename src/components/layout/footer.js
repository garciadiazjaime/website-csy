'use strict';

var React = require('react');
var ReactRouter = require('react-router');

var rb = require('react-bootstrap');
var Row = rb.Row;
var Col = rb.Col;
var Link = ReactRouter.Link;

var PoweredWidget = require('../widgets/powered-widget');

var FooterSection = React.createClass({

  render: function() {
    return (
        <div>
            <div className="container">
                <Row>
                    <Col xs={12} sm={8}>
                        <nav id="footerNavigation">
                            <ul>
                                <li>
                                    <h5><Link to="ourteam" title="Our team">Our team</Link></h5>
                                    <ul>
                                        <li><Link to="whatmakesusdifferent" title="What makes us different">What makes us different</Link></li>
                                        <li><Link to="ourpledge" title="Our pledge">Our pledge</Link></li>
                                        <li><Link to="leadingbrands" title="Leading Brands">Leading Brands</Link></li>
                                    </ul>  
                                </li><li>
                                    <h5><Link to="whatwedo" title="What we do">What we do</Link></h5>
                                    <ul>
                                        <li><Link to="audiodistribution" title="Audio Distribution">Audio Distribution</Link></li>
                                        <li><Link to="videodistribution" title="Video Distribution">Video Distribution</Link></li>
                                        <li><Link to="hometheater" title="Home Theater">Home Theater</Link></li>
                                        <li><Link to="communicationsystems" title="Communication Systems">Communication Systems</Link></li>
                                        <li><Link to="securitysystems" title="Security Systems">Security Systems</Link></li>
                                        <li><Link to="lightingcontrol" title="Lighting Control">Lighting Control</Link></li>
                                        <li><Link to="othersystemsintegration" title="Other Systems Integration">Other Systems Integration</Link></li>
                                    </ul>    
                                </li><li>
                                    <h5><Link to="theexperience" title="The Experience">The Experience</Link></h5>
                                    <ul>
                                        <li><Link to="ourproccess" title="Our process">Our process</Link></li>
                                    </ul>    
                                </li><li>
                                    <h5><Link to="letsmeet" title="Let's meet">Lets meet</Link></h5>
                                    <ul>
                                        <li><Link to="location" title="Location">Location</Link></li>
                                        <li><Link to="contact" title="Contact">Contact</Link></li>
                                    </ul>    
                                </li>
                            </ul>
                        </nav>
                    </Col>
                    <Col id="addressColumn" xs={12} sm={4}>
                        <span id="footerLogo"></span>
                        <address>
                            <p>Blvd. Mauricio Castro #609, Col. Chulavista, San José del Cabo BCS, Mx. 23443</p>
                            <ul id="phoneList">
                                <li><a href="tel:6241469050" title="Call us in Mexico"><em>Mx Ph.</em> (624) 146 9050</a></li>
                                <li><a href="tel:6195122674" title="Call us in the US"><em>Us Ph.</em> (619) 512 2674</a></li>
                            </ul> 
                        </address>
                    </Col>
                </Row>   
            </div>
            <PoweredWidget />
        </div>
    );
  }
});

module.exports = FooterSection;