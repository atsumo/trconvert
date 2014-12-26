#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

var Converter = require('./converter');

module.exports = function(program) {
    var filePath = program.args[0];
    if (!filePath) {
        program.help();
        return console.log('should set -f file name!');
    }

    if (program.ratio) console.log('  - ratio', program.ratio);
    if (program.base) console.log('  - base', program.base);
    if (program.output) console.log('  - output', program.output);
    console.log('  - convert', filePath);

    var tfc    = new Converter(path.resolve(process.cwd() + '/' + filePath), program.ratio, program.base);
    var buffer = tfc.convert();
    var dest   = program.output || tfc.getConvertedFileName();

    fs.writeFile(dest, buffer, {encoding:'utf8'}, function(err) {
        if ( err ) {
            return console.log('Oops! failed to write converted source.');
        }

        console.log('Success! converted file created. ->', dest);
    });

};