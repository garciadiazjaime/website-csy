'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Link = ReactRouter.Link;

// ---- SUBSECTIONS
var ExperienceStyleA = require('./experience-style-a.js');
var ExperienceStyleB = require('./experience-style-b.js');

var AutoScrollMixin = require('../../mixins/autoscroll-mixin');

// ----- DATA
var experienceData = require('../../../data/experience-data')


var ProcessSubsection = React.createClass({

	mixins: [AutoScrollMixin],

	clickHandler: function(elementId, event) {
		event.preventDefault();
		var wrapper = document.getElementById('process-panel').offsetHeight;
		var sectionNeeds = document.querySelector('div.process-needs').offsetHeight;
		var sectionDesign = document.querySelector('div.process-design').offsetHeight;
		var sectionDocumentation = document.querySelector('div.process-documentation').offsetHeight;
		var sectionAssembly = document.querySelector('div.process-assembly').offsetHeight;
		var sectionProgramming = document.querySelector('div.process-programming').offsetHeight;
		var sectionInstallation = document.querySelector('div.process-installation').offsetHeight;
		var sectionMaintenance = document.querySelector('div.process-maintenance').offsetHeight;

		var elementOffset = {
			'needs-assessments': -wrapper - 20,
			'preliminary-design': sectionDesign / 2 - 2 * wrapper,
			'documentation': sectionNeeds + wrapper,
			'system-assembly': sectionDesign + sectionAssembly / 2 - 3 * wrapper,
			'programming': sectionNeeds + sectionDocumentation + 4 * wrapper,
			'installation': sectionDesign + sectionAssembly + sectionInstallation / 3 - 2 * wrapper,
			'maintenance': sectionNeeds + sectionDocumentation + sectionProgramming + 6 * wrapper
		};
		var offset = elementOffset[elementId];
		this.autoScrollTo('process-panel', offset);
	},

	render: function() {
		var ExperienceComponents = this._getExperienceComponentsComponents(experienceData);

		return (
			<div>
				<div className="container">
					<h4>our process</h4>
					<hr />
					<br />
					<ul className="hidden-xs">
						<li className="process-needs"><a title="Audio Distribution" id="homeServicesList-audio" onClick={this.clickHandler.bind(this, 'needs-assessments')}>Needs<br />Assessments</a></li>
						<li className="process-design"><a title="Preliminary Design" onClick={this.clickHandler.bind(this, 'preliminary-design')}>Preliminary<br />Design</a></li>
						<li className="process-documentation"><a title="Documentation" onClick={this.clickHandler.bind(this, 'documentation')}>Documentation</a></li>
						<li className="process-assembly"><a title="System Assembly" onClick={this.clickHandler.bind(this, 'system-assembly')}>System<br />Assembly</a></li>
						<li className="process-programming"><a title="Programming" onClick={this.clickHandler.bind(this, 'programming')}>Programming</a></li>
						<li className="process-installation"><a title="Installation" onClick={this.clickHandler.bind(this, 'installation')}>Installation</a></li>
						<li className="process-maintenance"><a title="Maintenance" onClick={this.clickHandler.bind(this, 'maintenance')}>Maintenance</a></li>
					</ul>
					<span className="learn-more hidden-xs">learn more</span>
					<div id="process-panel">
							{ExperienceComponents}
							<Col md={6} xs={12} sm={6} className="process-closing">
								<h3>Technology is about everything simple, not the other way arround.</h3>
								<Link to="letsmeet" title="lets work together">let&#39;s work together</Link>
							</Col>
					</div>
				</div>
			</div>
		);
	},

	_getExperienceComponentsComponents: function(data){
		var response = data.map(function(item, i){
			return item.style === 'a' ?
				(<ExperienceStyleA data={item} key={i}/>) :
				(<ExperienceStyleB data={item} key={i}/>)
		});
		return response;
	}
});


module.exports = ProcessSubsection;
