'use strict';

var React = require('react');
var ReactRouter = require('react-router');

// ---- SUBSECTIONS
var BannerWidget = require('./widgets/banner-widget');
var IntroSubsection = require('./ourteam/intro-subsection');
var CarouselWidget = require('./widgets/carousel-widget');
var OurSignatureSubsection = require('./ourteam/oursignature-subsection');
var ValuesSubsection = require('./ourteam/values-subsection');
var CommunitySubsection = require('./ourteam/community-subsection');
var ClientsSubsection = require('./ourteam/clients-subsection');

var AutoScrollMixin = require('../mixins/autoscroll-mixin');


var OurteamSection = React.createClass({

    mixins : [ReactRouter.Navigation, ReactRouter.State, AutoScrollMixin],

    handleClick: function(){
        console.log('handleClick');
        // this.transitionTo('home');
    },

    componentDidMount: function() {
        var path = this.getRoutes().slice(-1)[0].name;
        if (['whatwedo'].indexOf(path) === -1) {
            this.autoScrollTo(path, -123);
        }
    },

    componentDidUpdate: function() {
        var path = this.getRoutes().slice(-1)[0].name;
        if (['whatwedo'].indexOf(path) === -1) {
            this.autoScrollTo(path, -123);
        }
    },

    render: function() {

        return (
            <div id="ourteam">
                <BannerWidget title="Our clients comfort is <span>our priority</span>."/>
                <IntroSubsection />
                <OurSignatureSubsection />
                <ValuesSubsection />
                <CommunitySubsection />
                <ClientsSubsection />
            </div>
        );
    }
});

module.exports = OurteamSection;
