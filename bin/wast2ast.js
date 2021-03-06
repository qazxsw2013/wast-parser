#!/usr/bin/env node

'use strict';

var fs = require('fs'),
    path = require('path'),
    jsof = require('jsof'),
    parser = require('../');

function runner (name, dst, report) {
    return function (err, data) {
        var result;
        if (err) { throw err; }
        try {
            result = parser.parse(data);
        } catch (err1) {
            console.log('\x1b[31m' + name + '\x1b[0m');
            console.log(err1);
            report.fail++;
            return;
        }
        console.log('\x1b[32m' + name + '\x1b[0m');
        fs.writeFile(
            path.resolve(dst, name + '.js'),
            jsof.s(result) + '\n',
            function (err2) {
                if (err2) { throw err2; }
                report.pass++;
            }
        );
    };
}

var report = { pass: 0, fail: 0 };

[
    { src: '../testsuite/',       dst: '../results/' },
    { src: '../testsuite-extra/', dst: '../results-extra/' }
]
.map(function (job) {
    return {
        src: path.resolve(__dirname, job.src),
        dst: path.resolve(__dirname, job.dst)
    };
})
.map(function (job) {
    return {
        src: job.src,
        dst: job.dst,
        files: (
            fs.readdirSync(job.src)
            .filter(function (fileName) {
                return fileName.match('^(.*).wast$');
            })
        )
    };
})
.forEach(function (job) {
    job.files.forEach(function (wastFileName) {
        var matchArr = wastFileName.match('^(.*).wast$');
        fs.readFile(
            path.resolve(job.src, wastFileName),
            'utf8',
            runner(matchArr[1], job.dst, report)
        );
    });
});

process.on('exit', function () {
    console.log('\x1b[32mpass: ' + report.pass + '\x1b[0m / \x1b[31mfail: ' + report.fail + '\x1b[0m');
});
