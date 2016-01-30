'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Row = rb.Row;
var Col = rb.Col;
var Link = ReactRouter.Link;

var BannerWidget = React.createClass({

    render: function() {
      var title = {__html: this.props.title};
      return (
        <div id="banner">
            <div className="container">
                <Row>
                    <Col xs={10} xsOffset={1} sm={6} smOffset={6} className="banner_textbox hidden-xs">
                        <h1 dangerouslySetInnerHTML={title}></h1>
                    </Col> 
                </Row>
            </div>   
        </div>
      );
    }
});

module.exports = BannerWidget;
