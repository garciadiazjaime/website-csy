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
			<div>
				<h1>We make it easy for you</h1>
			</div>
		);
	}
});


module.exports = IntroSubsection;