var BaseConverter = require('../BaseConverter');
var log           = require('../util/logger').log;

module.exports = DrawRect;

function DrawRect(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

DrawRect.prototype = new BaseConverter();

DrawRect.execute = function(src, ratio) {
    var drawRect = new DrawRect(src, ratio);

    return drawRect.convert();
};

DrawRect.prototype.convert = function() {
    var ratio = this.ratio;
    var cvd   = this.args.map(function(arg) {
        var result = arg * ratio;

        if (_.isNaN(result)) {
          // stringの場合は ratioをかけた式にして返却
            return '(' + arg + ') *' +  ratio;
        }
        
        return result;
    });

    log('DrawRect convert (' + this.src + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};

