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
        	<div id="since">
            <div className="container">
                <Row>
                    <Col xs={12}>
                        <h1 className="hidden-xs">RELIABLE HOME TECHNOLOGY</h1>
                    </Col>
                    <Col xs={4} className="hidden-xs">
                        <h2 className="orange">Cabo&#39;s Finest <span className="underline">since</span> 1995</h2>
                    </Col>
                    <Col xs={12} sm={8}>
                        <h2 className="description">We provide you with a seamless technology integration experience</h2>
                        <p>Cabo Systems is a leading Custom Residential Electronics Design and Integration Company that has distinguished for the work in the finest local projects in Los Cabos. We are proud to offer you esthetic installations for your Residence complying with the industry quality standards.</p>
                    </Col>
                </Row>
            </div>
        	</div>
      	);
    }
});

module.exports = IntroSubsection;
