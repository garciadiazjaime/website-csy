'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Link = ReactRouter.Link;

// ---- SUBSECTIONS
var IntroservicesSubsection = require('./introservices-subsection.js');
var ServiceStyleA = require('./service-style-a.js');
var ServiceStyleB = require('./service-style-b.js');

// ----- DATA
var servicesData = require('../../../data/services-data')

var AutoScrollMixin = require('../../mixins/autoscroll-mixin');

var ServicesSubsection = React.createClass({

	mixins: [ AutoScrollMixin],

	onClickHandler: function(serviceID) {
		console.log('onClickHandler', serviceID)
		this.autoScrollTo(serviceID, -100);
	},

	render: function() {
		var ServicesComponents = this._getServicesComponents(servicesData);
		return (
			<div>
				<div id="services-menu" className="container hidden-xs">
					<Row>
						<Col md={6} id="left-column">
							<ul>
								<li><a onClick={this.onClickHandler.bind(this, 'audiodistribution')} title="Audio">Audio</a></li>
								<li><a onClick={this.onClickHandler.bind(this, 'hometheater')} title="Home Theater">Home Theater</a></li>
								<li><a onClick={this.onClickHandler.bind(this, 'securitysystems')} title="Security">Security</a></li>
								<li><a onClick={this.onClickHandler.bind(this, 'othersystemsintegration')} title="Integration">Integration</a></li>
							</ul>
						</Col>
						<Col md={6} id="right-column">
							<ul>
								<li><a onClick={this.onClickHandler.bind(this, 'videodistribution')} title="Video">Video</a></li>
								<li><a onClick={this.onClickHandler.bind(this, 'communicationsystems')} title="Communication">Communication</a></li>
								<li><a onClick={this.onClickHandler.bind(this, 'lightingcontrol')} title="Lighting">Lighting</a></li>
							</ul>
						</Col>
					</Row>
				</div>
				<IntroservicesSubsection />
				<Row id="blue-block">
					<Col md={12} className="hidden-xs"></Col>
				</Row>
				<div className="blue-background">
					<div className="container" id="services-panel">
						{ServicesComponents}
					</div>
				</div>
			</div>
		);
	},

	_getServicesComponents: function(data){
		var response = data.map(function(item, i){
			return item.style === 'a' ?
				(<ServiceStyleA data={item} key={i}/>) :
				(<ServiceStyleB data={item} key={i}/>)
		});
		return response;
	}
});


module.exports = ServicesSubsection;
