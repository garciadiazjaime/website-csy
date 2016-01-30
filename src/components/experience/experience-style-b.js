'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Link = ReactRouter.Link;

var ExperienceStyleB = React.createClass({

	render: function() {
		var content = {__html: this.props.data.content};
		return (
			<Col md={6} xs={12} sm={6} className={"process-style-b process-" + this.props.data.id}>
				<div className="process-content" id={this.props.data.anchor}>
					<h2>{this.props.data.title}</h2>
					<hr />
					<br className="clearfix" />
					<h3>{this.props.data.subtitle}</h3>
					<p dangerouslySetInnerHTML={content} />
				</div>
			</Col>
		);
	}
});


module.exports = ExperienceStyleB;
