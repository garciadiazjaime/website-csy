'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Link = ReactRouter.Link;

var AudioSubsection = React.createClass({

	render: function() {
		var title = {__html: this.props.data.title}
		var subtitle = {__html: this.props.data.subtitle}

		return (
			<div className="service-card service-style-a" id={this.props.data.anchor}>
				<Row>
					<Col md={2} sm={4} className="service-image hidden-xs">
						<div className={"service-"+this.props.data.id}></div>
					</Col>
					<Col md={10} sm={8} xs={12} className="service-content">
						<Row className="service-text">
							<Col md={8} mdOffset={4} xs={12} sm={8} smOffset={4}>
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
								<br />
								{ this.props.data.quote ?
									<b>{this.props.data.quote}</b>
									: null
								}
							</Col>
						</Row>
						<Row>
							<Col md={4} sm={4} className="service-no-background hidden-xs">
							</Col>
							<Col md={8} sm={8} xs={12} className="service-footer">
									<Link to={this.props.data.link.to} title={this.props.data.link.title} className="button">{this.props.data.link.title}</Link>
							</Col>
						</Row>
					</Col>
				</Row>
			</div>
		);
	}
});


module.exports = AudioSubsection;
