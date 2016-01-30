'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Link = ReactRouter.Link;

var IntroSubsection = React.createClass({

	render: function() {

		return (
			<div id="intro" className="container">
				<h2>What we do</h2>
				<hr />
				<Row>
					<Col md={6} xs={12} sm={6}>
						We start working with you to design a system that meets your true needs of functionality and we support you through the entire construction by coordinating your custom requests. We will work closely with everyone involved in the project to make it a success. <br />
						We are confident that you will find our service, attention to detail, and commitment to your satisfaction to be among the best in the industry.
					</Col>
					<Col md={6} xs={12} sm={6} className="right-column  hidden-xs">
						<ul>
							<li>design</li>
							<li>installation</li>
							<li>maintenance</li>
						</ul>
					</Col>
				</Row>
			</div>
		);
	}
});


module.exports = IntroSubsection;
