'use strict';

var React = require('react');
var ReactRouter = require('react-router');

var rb = require('react-bootstrap');
var Row = rb.Row;
var Col = rb.Col;
var Button = rb.Button;

var CarouselWidget = require('./widgets/carousel-widget');
var IntroductionPanel = require('./home/introduction');
var ServicesPanel = require('./home/services');
var LocationPanel = require('./home/location');

var HomeSection = React.createClass({

    mixins : [ReactRouter.Navigation],
    
    handleClick: function(){
        console.log('handleClick');
        // this.transitionTo('schedule');
    },

    handleChange: function(e){
        console.log('handleChange');
        // console.log(e.target.value);
    },

    render: function() {

        return (
            <div id="home-section">
                <CarouselWidget />
                <IntroductionPanel />
                <ServicesPanel />
                <LocationPanel />
            </div>
        );
    }
});

module.exports = HomeSection;
