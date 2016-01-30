'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Link = ReactRouter.Link;


var WhatwedoSubsection = React.createClass({

    render: function() {

        return (
        	<div id="different">
	          <div className="container" id="whatmakesusdifferent">
                <Row>
                    <Col xs={12}>
                        <div id="banner_different"></div>
                        <Col xs={12} sm={7} md={8} className="different_col_width">
                            <h1>What makes us different</h1>
                            <hr />
                            <ul>
                              <li>We are a local established business with the proper facilities to support the demanding systems that we deliver (Secured-Warehouse, Lab, Engineering Dep., Accounting Dep., Training Room, Meeting Room,etc).</li>
                              <li>Our staff counts with in‐house Programmers and Technicians for immediate assistance (no subcontracting for technicians or remote programmers). You will never miss a football game !</li>
                              <li>We are a Family business. Our ethics and values are daily implemented in our work.</li>
                              <li>As a Local Integrator, we will provide you with all the “special” knowledge & expertise required for this type of building in our area (Concrete Homes), addition to the advantages in terms of logistics for equipment supply, project management and supervision to local contractors involved and finally the installation and future servicing for your system’s correct operation and maintenance.</li>
                              <li>All of our products are properly imported to Mexico in order to provide you with a legal invoice and to support future warranties with Manufacturers if required.</li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={5} md={4} className="represent_col_width">
                            <span className="home_icon_white"></span>
                            <h2>We represent quality and reliability in a sophisticated way.</h2>
                            <Link to="whatwedo" title="this is what we do" className="button">this is what we do</Link>
                        </Col>
                    </Col>
                </Row>
            </div>
	        </div>
        );
    }
});

module.exports = WhatwedoSubsection;
