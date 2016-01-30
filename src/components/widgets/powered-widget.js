'use strict';

var React = require('react');
var ReactRouter = require('react-router');

var rb = require('react-bootstrap');
var Row = rb.Row;
var Col = rb.Col;

var PoweredWidget = React.createClass({

    render: function() {

        return (
            <div id="footerCredits">
                <div className="container">
                    <Row>
                        <Col xs={12} sm={7}>
                            <p>CopyRight   ©   All Rights Reserved Cabo Systems </p>
                        </Col>
                        <Col xs={12} sm={5} className="hide">
                            <p>A project designed by <a href="http://somospool.com/" title="POOL Branding" target="_blank">POOL</a> Code by <a href="http://mintitmedia.com/" title="Mint IT Media - Design and web development" target="_blank">MINT</a></p>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
});

module.exports = PoweredWidget;
