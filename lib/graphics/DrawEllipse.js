var BaseConverter = require('../BaseConverter');
var log           = require('../util/logger').log;

module.exports = DrawEllipse;

function DrawEllipse(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

DrawEllipse.prototype = new BaseConverter();

DrawEllipse.execute = function(src, ratio) {
    var drawEllipse = new DrawEllipse(src, ratio);

    return drawEllipse.convert();
};

DrawEllipse.prototype.convert = function() {
    var ratio = this.ratio;
    var cvd   = this.args.map(function(arg) {
        var result = arg * ratio;

        if (_.isNaN(result)) {
          // stringの場合は ratioをかけた式にして返却
            return '(' + arg + ') *' +  ratio;
        }
        
        return result;
    });

    log('DrawEllipse convert (' + this.src + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};

