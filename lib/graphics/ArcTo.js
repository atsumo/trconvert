var BaseConverter = require('../BaseConverter');
var log           = require('../util/logger').log;
var _             = require('lodash');

module.exports = ArcTo;

function ArcTo(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

ArcTo.prototype = new BaseConverter();

ArcTo.execute = function(src, ratio) {
    var arcTo = new ArcTo(src, ratio);

    return arcTo.convert();
};

ArcTo.prototype.convert = function() {
    var ratio = this.ratio;
    var cvd   = this.args.map(function(arg) {
        var result = arg * ratio;

        if (_.isNaN(result)) {
          // stringの場合は ratioをかけた式にして返却
            return '(' + arg + ') *' +  ratio;
        }
        
        return result;
    });

    log('ArcTo convert (' + this.src + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};

