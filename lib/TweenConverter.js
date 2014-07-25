var BaseConverter = require('./BaseConverter');
var log           = require('./util/logger').log;
var _             = require('lodash');

module.exports = TFCTweenConverter;

function TFCTweenConverter(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

TFCTweenConverter.prototype = new BaseConverter();

TFCTweenConverter.execute = function(src, ratio) {
    var conv = new TFCTweenConverter(src, ratio);

    return conv.convert();
};

TFCTweenConverter.prototype.convert = function() {
    // .to method must convert first argument object
    var props  = this.args[0],
        objStr = [],
        conv   = false,
        ratio  = this.ratio;

    Object.keys(props).forEach(function(key) {
        if ( /x|y|regX|regY/.test(key) ) {
            var result = props[key] * ratio;

            if (_.isNaN(result)) {
              // stringの場合は ratioをかけた式にして返却
              result = '(' + props[key] + ') *' +  ratio;
            }
            
            props[key] = result;
            conv = true;
        }
        objStr.push(key + ':' + props[key]);
    });

    this.args[0] = '{' + objStr.join(',') + '}';

    if ( conv === true ) {
        log('Tween convert (' + this.src + ') -> (' + this.args.join(', ') + ')');
        return this.args.join(',');
    } else {
        log('Tween convert: nothing to convert props. skipped: ' + this.src);
        return this.src;
    }
};
