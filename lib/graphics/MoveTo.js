var BaseConverter = require('../BaseConverter');
var log           = require('../util/logger').log;
var _             = require('lodash');

module.exports = MoveTo;

function MoveTo(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

MoveTo.prototype = new BaseConverter();

MoveTo.execute = function(src, ratio) {
    var moveTo = new MoveTo(src, ratio);

    return moveTo.convert();
};

MoveTo.prototype.convert = function() {
    var ratio = this.ratio;
    var cvd   = this.args.map(function(arg) {
        var result = arg * ratio;

        if (_.isNaN(result)) {
          // stringの場合は ratioをかけた式にして返却
            return '(' + arg + ') *' +  ratio;
        }
        
        return result;
    });

    log('MoveTo convert (' + this.src + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};

