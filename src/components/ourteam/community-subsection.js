'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Link = ReactRouter.Link;


var CommunitySubsection = React.createClass({

    render: function() {

        return (
        	<div id="leading-section">
	            <div className="container" id="leadingbrands">
	                <Row>
	                    <Col xs={4} className="greatpeople hidden-xs">
	                        <span className="ourteam_img"></span>
	                        <h2> Great people, doing <span className="orange_border">great work</span></h2>
	                    </Col>
	                    <Col xs={12} sm={8} className="leading-brands">
	                        <h1>Leading brands</h1>
	                        <hr />
	                        <p>Cabo Systems is the only recognized Cabo authorized dealer for the leading Home‐electronic brands, counting with all the required certifications and trainings from this manufacturers. We utilize best-in-class products that balance performance requirements with project budget.
	                        </p>
	                        <a href="https://www.savant.com/" className="savant"></a>
	                        <p className="italics">Cabo Systems is our lead representative in Cabo and one of the most reliable technology integration companies in Mexico.</p>
	                        <p className="who">― Jack Smith<br />Savant VicePresident</p>
	                    </Col>
	                </Row>
	            </div>
	        </div>
        );
    }
});

module.exports = CommunitySubsection;
