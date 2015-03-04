var BaseConverter = require('./BaseConverter');
var log           = require('./util/logger').log;
var _             = require('lodash');

module.exports = TFCGuidePathConverter;

function TFCGuidePathConverter(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

TFCGuidePathConverter.prototype = new BaseConverter();

TFCGuidePathConverter.execute = function(src, ratio) {
    var conv = new TFCGuidePathConverter(src);

    return conv.convert(ratio);
};

TFCGuidePathConverter.prototype.convert = function(ratio) {
   var cvd  = this.args.map(function(arg) {
        var result = arg * ratio;

        if (_.isNaN(result)) {
            // stringの場合は ratioをかけた式にして返却
            return '(' + arg + ') *' +  ratio;
        }

        return result;
    });

    log('GuidePath convert (' + this.args.join(', ') + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};
