'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var rb = require('react-bootstrap');

var Nav = rb.Nav;
var Navbar = rb.Navbar;
var NavItem = rb.NavItem;
var Button = rb.Button;
var DropdownButton = rb.DropdownButton;
var CollapsibleNav = rb.CollapsibleNav;

var SocialWidget = require('./../widgets/social-link-widget');

var Button = rb.Button;
var Link = ReactRouter.Link;

var HeaderSection = React.createClass({

    mixins: [ReactRouter.Navigation],


    handleClick: function(page){
        this.transitionTo(page);
        document.getElementsByClassName('navbar-toggle')[0].click()
    },

    render: function() {
        return (
            <Navbar brand={<Link to="home" title="Cabo Systems | Go to Home">Cabo Systems | Go to Home</Link>} toggleNavKey={0}  className="navbar-static-top">
                <CollapsibleNav eventKey={0}> {/* This is the eventKey referenced */}
                  <Nav navbar>
                    <NavItem eventKey={1} onClick={this.handleClick.bind(this, 'home')}>Home</NavItem>
                    <NavItem eventKey={3} onClick={this.handleClick.bind(this, 'ourteam')}>Our team</NavItem>
                    <NavItem eventKey={2} onClick={this.handleClick.bind(this, 'whatwedo')}>What we do</NavItem>
                    <NavItem eventKey={2} onClick={this.handleClick.bind(this, 'theexperience')}>The Experience</NavItem>
                    <NavItem eventKey={4} onClick={this.handleClick.bind(this, 'letsmeet')}>Lets meet</NavItem>
                  </Nav>
                </CollapsibleNav>
            </Navbar>
        );
    }
});

module.exports = HeaderSection;
