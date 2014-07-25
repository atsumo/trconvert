var BaseConverter = require('./BaseConverter');
var log           = require('./util/logger').log;
var _             = require('lodash');

module.exports = CacheConverter;

function CacheConverter(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

CacheConverter.prototype = new BaseConverter();

CacheConverter.execute = function(src, ratio) {
    var conv = new CacheConverter(src, ratio);

    return conv.convert();
};

CacheConverter.prototype.convert = function() {
    var cvd  = [],
        size = this.args.length,
        i    = 0,
        rate = this.ratio;

    for ( ; i < size; ++i ) {
        
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
