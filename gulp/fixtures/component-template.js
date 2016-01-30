module.exports = "'use strict';\n" + 
"\n" +
"var React = require('react');\n" +
"var ReactRouter = require('react-router');\n" +
"var rb = require('react-bootstrap');\n" +
"var Row = rb.Row;\n" +
"var Col = rb.Col;\n" +
"\n" +
"// ---- SUBSECTIONS" +
"[include_requires]\n" +
"\n" +
"var WhatwedoSection = React.createClass({\n" +
"\t\n" +
"\tmixins : [ReactRouter.Navigation],\n" +
"\n" +    
"\thandleClick: function(){\n" +
"\t\tconsole.log('handleClick');\n" +
"\t},\n" +
"\n" +
"\trender: function() {\n" +
"\t\treturn (\n" +
"\t\t\t<div>[include_subsections]" + 
"\t\t\t</div>\n" +
"\t\t);\n" +
"\t}\n" +
"});\n" + 
"\n" + 
"module.exports = WhatwedoSection;";
