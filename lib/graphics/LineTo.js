var BaseConverter = require('../BaseConverter');
var log           = require('../util/logger').log;
var _             = require('lodash');

module.exports = LineTo;

function LineTo(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

LineTo.prototype = new BaseConverter();

LineTo.execute = function(src, ratio) {
    var lineTo = new LineTo(src, ratio);

    return lineTo.convert();
};

LineTo.prototype.convert = function() {
    var ratio = this.ratio;
    var cvd   = this.args.map(function(arg) {
        var result = arg * ratio;

        if (_.isNaN(result)) {
          // stringの場合は ratioをかけた式にして返却
            return '(' + arg + ') *' +  ratio;
        }
        
        return result;
    });

    log('LineTo convert (' + this.src + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};

