'use strict';

var React = require('react');
var Router = require('react-router');
var rb = require('react-bootstrap');
var Row = rb.Row;
var Col = rb.Col;

// ---- SUBSECTIONS
var BannerWidget = require('./widgets/banner-widget');
var IntroSubsection = require('./whatwedo/intro-subsections.js');
var ServicesSubsection = require('./whatwedo/services-subsections.js');

var AutoScrollMixin = require('../mixins/autoscroll-mixin');


var WhatwedoSection = React.createClass({

	mixins: [ Router.State, AutoScrollMixin],

	handleClick: function() {
		console.log('handleClick');
	},

	componentDidMount: function() {
		var path = this.getRoutes().slice(-1)[0].name;
    if (['whatwedo'].indexOf(path) === -1) {
      this.autoScrollTo(path, -103);
    }
  },

	componentDidUpdate: function() {
      var path = this.getRoutes().slice(-1)[0].name;
      if (['whatwedo'].indexOf(path) === -1) {
          this.autoScrollTo(path, -123);
      }
  },

	render: function() {
		return (
			<div id="whatwedo">
				<BannerWidget title="Smart living <span>made easy.</span>"/>
				<IntroSubsection />
				<ServicesSubsection />
			</div>
		);
	}
});

module.exports = WhatwedoSection;
