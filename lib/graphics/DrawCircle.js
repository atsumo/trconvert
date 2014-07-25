var BaseConverter = require('../BaseConverter');
var log           = require('../util/logger').log;
var _             = require('lodash');

module.exports = DrawCircle;

function DrawCircle(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

DrawCircle.prototype = new BaseConverter();

DrawCircle.execute = function(src, ratio) {
    var drawCircle = new DrawCircle(src, ratio);

    return drawCircle.convert();
};

DrawCircle.prototype.convert = function() {
    var ratio = this.ratio;
    var cvd   = this.args.map(function(arg) {
        var result = arg * ratio;

        if (_.isNaN(result)) {
          // stringの場合は ratioをかけた式にして返却
            return '(' + arg + ') *' +  ratio;
        }
        
        return result;
    });

    log('DrawCircle convert (' + this.src + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};

