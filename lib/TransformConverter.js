var BaseConverter = require('./BaseConverter');
var log           = require('./util/logger').log;
var _             = require('lodash');

module.exports = TFCTransformConverter;

function TFCTransformConverter(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

TFCTransformConverter.prototype = new BaseConverter();

TFCTransformConverter.execute = function(src, ratio) {
    var conv = new TFCTransformConverter(src, ratio);

    return conv.convert();
};

TFCTransformConverter.prototype.convert = function() {
    var cvd  = [],
        size = this.args.length,
        i    = 0,
        rate;

    // Parameters should convert index at 0, 1, 5, 6, 7, 8
    for ( ; i < size; ++i ) {
        rate =  ( "0178".indexOf(i.toString()) > -1 ) ? this.ratio: 1;

        var result = this.args[i] * rate;

        if (_.isNaN(result)) {
          // stringの場合は ratioをかけた式にして返却
            result = '(' + this.args[i] + ') *' +  rate;
        }
        
        cvd[i] = result;
    }

    //console.log(i , 'Transform convert (' + this.args.join(', ') + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};
