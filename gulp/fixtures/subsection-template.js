module.exports = "'use strict';\n" +
"\n" +
"var React = require('react');\n" +
"var ReactRouter = require('react-router');\n" +
"var rb = require('react-bootstrap');\n" +
"\n" + 
"var Row = rb.Row;\n" +
"var Col = rb.Col;\n" +
"var Link = ReactRouter.Link;\n" +
"\n" + 
"var filename = React.createClass({\n" +
"\n" +
"\trender: function() {\n" +
"\n" + 
"\t\treturn (\n" +
"\t\t\t<div>\n" +
"\t\t\t\t[ filename ]\n" +
"\t\t\t</div>\n" + 
"\t\t);\n" + 
"\t}\n" +
"});\n" +
"\n" +
"\n" +
"module.exports = filename;";
