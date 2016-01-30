'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Link = ReactRouter.Link;

var IntroservicesSubsection = React.createClass({

	render: function() {

		return (
			<div id="intro-services" className="container">
				<Row>
					<Col md={6} xs={12} sm={6}>
						Sit back, relax <br />and enjoy <span className="orange-text">home.</span>
					</Col>
					<Col md={6} xs={12} sm={6}>
						<div className="right-column">
							<Link to="letsmeet" title="contact us" className="button">contact us</Link>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
});


module.exports = IntroservicesSubsection;
