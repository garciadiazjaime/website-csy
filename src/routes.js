var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;

var Layout = require('./components/layout');
var HomeSection = require('./components/home-section');
var OurTeamSection = require('./components/ourteam-section');
var WhatwedoSection = require('./components/whatwedo-section');

var ExperienceSection = require('./components/experience-section');
var LetsMeetSection = require('./components/contactus-section');

var routes = (
	<Route path="/" handler={Layout}>
		<DefaultRoute name="home" handler={HomeSection}/>
		<Route name="homepage" path="/home"  handler={HomeSection} />

		<Route name="ourteam" path="/our-team" handler={OurTeamSection} />
		<Route name="whatmakesusdifferent" path="/our-team/what-makes-us-different" handler={OurTeamSection} />
		<Route name="ourpledge" path="/our-team/our-pledge" handler={OurTeamSection} />
		<Route name="leadingbrands" path="/our-team/leading-brands" handler={OurTeamSection} />

		<Route name="whatwedo" path="/what-we-do" handler={WhatwedoSection} />
		<Route name="audiodistribution" path="/what-we-do/audio-distribution" handler={WhatwedoSection} />
		<Route name="videodistribution" path="/what-we-do/video-distribution" handler={WhatwedoSection} />
		<Route name="hometheater" path="/what-we-do/home-theater" handler={WhatwedoSection} />
		<Route name="communicationsystems" path="/what-we-do/communication-systems" handler={WhatwedoSection} />
		<Route name="securitysystems" path="/what-we-do/security-systems" handler={WhatwedoSection} />
		<Route name="lightingcontrol" path="/what-we-do/lighting-control" handler={WhatwedoSection} />
		<Route name="othersystemsintegration" path="/what-we-do/other-systems-integration" handler={WhatwedoSection} />

		<Route name="theexperience" path="/the-experience" handler={ExperienceSection} />
		<Route name="ourproccess" path="/the-experience/our-proccess" handler={ExperienceSection} />

		<Route name="needs-assessments" path="/the-experience/needs-assessments" handler={ExperienceSection} />
		<Route name="preliminary-design" path="/the-experience/preliminary-design" handler={ExperienceSection} />
		<Route name="documentation" path="/the-experience/documentation" handler={ExperienceSection} />
		<Route name="system-assembly" path="/the-experience/system-assembly" handler={ExperienceSection} />
		<Route name="programming" path="/the-experience/programming" handler={ExperienceSection} />
		<Route name="installation" path="/the-experience/installation" handler={ExperienceSection} />
		<Route name="maintenance" path="/the-experience/maintenance" handler={ExperienceSection} />

		<Route name="letsmeet" path="/lets-meet" handler={LetsMeetSection} />
		<Route name="location" path="/lets-meet/location" handler={LetsMeetSection} />
		<Route name="contact" path="/lets-meet/contact" handler={LetsMeetSection} />
	</Route>
);

module.exports = routes;
