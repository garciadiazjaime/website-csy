'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Link = ReactRouter.Link;

var HomeLocationPanel = React.createClass({

    mixins : [ReactRouter.Navigation],

    render: function() {

        return (
            <section id="homeLocation">
                <div className="container">
                    <Row>
                        <Col xs={10} xsOffset={1} sm={5} smOffset={7}>
                            <h2>Our location</h2>
                            <hr />
                            <p>We are based in Los Cabos, in the Baja (peninsula) in Mexico. Established since 1995.</p>
                            <br />
                            <Link to="contact" title="Ver catálogo" className="button">
                                Drop us a line
                            </Link>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
});

module.exports = HomeLocationPanel;
