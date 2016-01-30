var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');
var file = require('gulp-file');
var subsectionTemplate = require('../fixtures/subsection-template');
var componentTemplate = require('../fixtures/component-template');


function task() {
    var data = {
        section: 'experience',
        folder: 'src/components/',
        files: [
            {
                name: 'intro-subsection.js',
                className: 'IntroSubsection'
            },
            {
                name: 'process-subsection.js',
                className: 'ProcessSubsection'
            },
            {
                name: 'assessments-subsection.js',
                className: 'AssessmentsSubsection'
            },
            {
                name: 'preliminary-subsection.js',
                className: 'PreliminarySubsection'
            },
            {
                name: 'documentation-subsection.js',
                className: 'DocumentationSubsection'
            },
            {
                name: 'assembly-subsection.js',
                className: 'AssemblySubsection'
            },
            {
                name: 'programming-subsection.js',
                className: 'ProgrammingSubsection'
            },
            {
                name: 'installation-subsection.js',
                className: 'InstallationSubsection'
            },
            {
                name: 'maintenance-subsection.js',
                className: 'MaintenanceSubsection'
            }
        ]
    };
    var content = '';
    var components = '\n';
    var requires = '\n';

    for(var i=0, len=data.files.length; i<len; i++){
        content = subsectionTemplate.replace(/filename/gi, data.files[i].className);
        file(data.files[i].name, content).pipe(gulp.dest(data.folder + data.section));
        components += '\t\t\t\t<' + data.files[i].className + ' />\n';
        requires += 'var ' + data.files[i].className + ' = require(\'./' + data.section + '/' + data.files[i].name + '\');\n';
    }
    content = componentTemplate.replace('[include_subsections]', components);
    content = content.replace('[include_requires]', requires);
    file(data.section + '-section.js', content).pipe(gulp.dest(data.folder));
}

gulp.task('create:component', task);
