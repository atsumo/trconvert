var BaseConverter = require('../BaseConverter');
var log           = require('../util/logger').log;
var _             = require('lodash');

module.exports = DrawRoundRect;

function DrawRoundRect(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

DrawRoundRect.prototype = new BaseConverter();

DrawRoundRect.execute = function(src, ratio) {
    var drawRoundRect = new DrawRoundRect(src, ratio);

    return drawRoundRect.convert();
};

DrawRoundRect.prototype.convert = function() {
    var cvd = [];

    cvd[0] = _.isNaN(this.args[0] * this.ratio) ? ' (' + this.args[0] + ') * ' + this.ratio : this.args[0] * this.ratio;
    cvd[1] = _.isNaN(this.args[1] * this.ratio) ? ' (' + this.args[1] + ') * ' + this.ratio : this.args[1] * this.ratio;
    cvd[2] = _.isNaN(this.args[2] * this.ratio) ? ' (' + this.args[2] + ') * ' + this.ratio : this.args[2] * this.ratio;
    cvd[3] = _.isNaN(this.args[3] * this.ratio) ? ' (' + this.args[3] + ') * ' + this.ratio : this.args[3] * this.ratio;    
    cvd[4] = this.args[4];
    
    log('DrawRoundRect convert (' + this.src + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};

