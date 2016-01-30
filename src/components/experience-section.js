'use strict';

var React = require('react');
var Router = require('react-router');
var rb = require('react-bootstrap');
var Row = rb.Row;
var Col = rb.Col;

// ---- SUBSECTIONS
var IntroSubsection = require('./experience/intro-subsection.js');
var ProcessSubsection = require('./experience/process-subsection.js');
var SimpleBlock = require('./block/simple-block');

var AutoScrollMixin = require('../mixins/autoscroll-mixin');

var WhatwedoSection = React.createClass({

	mixins: [ Router.State, AutoScrollMixin],

	handleClick: function(){
		console.log('handleClick');
	},

	componentDidMount: function() {
		var path = this.getRoutes().slice(-1)[0].name;
    this.autoScrollTo(path, -103);
  },

	render: function() {
		return (
			<div className="blue-background" id="experience-panel">
				<SimpleBlock>
					We make it easy for you
				</SimpleBlock>
				<ProcessSubsection />
			</div>
		);
	}
});

module.exports = WhatwedoSection;
