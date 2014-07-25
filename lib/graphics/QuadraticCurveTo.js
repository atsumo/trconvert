var BaseConverter = require('../BaseConverter');
var log           = require('../util/logger').log;
var _             = require('lodash');

module.exports = QuadraticCurveTo;

function QuadraticCurveTo(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

QuadraticCurveTo.prototype = new BaseConverter();

QuadraticCurveTo.execute = function(src, ratio) {
    var quadraticCurveTo = new QuadraticCurveTo(src, ratio);

    return quadraticCurveTo.convert();
};

QuadraticCurveTo.prototype.convert = function() {
    var ratio = this.ratio;
    var cvd = this.args.map(function(arg) {
        var result = arg * ratio;

        if (_.isNaN(result)) {
          // stringの場合は ratioをかけた式にして返却
            return '(' + arg + ') *' +  ratio;
        }
        
        return result;
    });

    log('QuadraticCurveTo convert (' + this.src + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};

