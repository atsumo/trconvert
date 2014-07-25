var BaseConverter = require('../BaseConverter');
var log           = require('../util/logger').log;
var _             = require('lodash');

module.exports = BezierCurveTo;

function BezierCurveTo(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

BezierCurveTo.prototype = new BaseConverter();

BezierCurveTo.execute = function(src, ratio) {
    var bezierCurveTo = new BezierCurveTo(src, ratio);

    return bezierCurveTo.convert();
};

BezierCurveTo.prototype.convert = function() {
    var ratio = this.ratio;
    var cvd   = this.args.map(function(arg) {
        var result = arg * ratio;

        if (_.isNaN(result)) {
          // stringの場合は ratioをかけた式にして返却
            return '(' + arg + ') *' +  ratio;
        }
        
        return result;
    });

    log('BezierCurveTo convert (' + this.src + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};

