'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Link = ReactRouter.Link;

var VideoSubsection = React.createClass({

	render: function() {
		var title = {__html: this.props.data.title}
		var subtitle = {__html: this.props.data.subtitle}

		return (
			<div className="service-card service-style-b" id={this.props.data.anchor}>
				<Row>
					<Col md={8} xs={12} sm={10} className="service-content">
						<h2 className={this.props.data.id+"-icon"} dangerouslySetInnerHTML={title}></h2>
						<hr />
						<h3 dangerouslySetInnerHTML={subtitle}></h3>
						<br />
						{
							this.props.data.content.map(function(line, i){
								var content = {__html: line};
								return (<p key={i} dangerouslySetInnerHTML={content} />)
							})
						}
					</Col>
				</Row>
				<Row>
					<Col md={4} mdOffset={8} xs={12} sm={10} className="service-aside">
						<div>
							<Link to={this.props.data.link.to} title={this.props.data.link.title} className="button">{this.props.data.link.title}</Link>
						</div>
					</Col>
				</Row>
				<Row className="hidden-xs">
					<Col md={8} mdOffset={4} className="service-image">
						<div className={"pull-right service-"+this.props.data.id}></div>
					</Col>
				</Row>
			</div>
		);
	}
});

module.exports = VideoSubsection;
