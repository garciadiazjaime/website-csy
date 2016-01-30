'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Link = ReactRouter.Link;

var SimpleBlock = React.createClass({

    render: function() {

        return (
            <div className="simple-block container">
                <h1>{this.props.children}</h1>
            </div>
        );
    }
});

module.exports = SimpleBlock;
