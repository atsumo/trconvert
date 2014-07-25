var BaseConverter = require('./BaseConverter');
var log           = require('./util/logger').log;
var _             = require('lodash');

module.exports = TFCRectangleConverter;

function TFCRectangleConverter(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

TFCRectangleConverter.prototype = new BaseConverter();

TFCRectangleConverter.execute = function(src, ratio) {
    var conv = new TFCRectangleConverter(src);

    return conv.convert(ratio);
};

TFCRectangleConverter.prototype.convert = function(ratio) {
   var cvd  = this.args.map(function(arg) {
        var result = arg * ratio;

        if (_.isNaN(result)) {
          // stringの場合は ratioをかけた式にして返却
            return '(' + arg + ') *' +  ratio;
        }
        
        return result;
    });

    log('Rectangle convert (' + this.args.join(', ') + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};
