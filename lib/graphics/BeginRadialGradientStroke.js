var BaseConverter = require('../BaseConverter');
var log           = require('../util/logger').log;
var _             = require('lodash');

module.exports = BeginRadialGradientStroke;

function BeginRadialGradientStroke(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

BeginRadialGradientStroke.prototype = new BaseConverter();

BeginRadialGradientStroke.execute = function(src, ratio) {
    var beginRadialGradientStroke = new BeginRadialGradientStroke(src, ratio);

    return beginRadialGradientStroke.convert();
};

BeginRadialGradientStroke.prototype.convert = function() {
    var cvd = [];

    cvd[0] = this.args[0];
    cvd[1] = this.args[1];
    cvd[2] = _.isNaN(this.args[2] * this.ratio) ? ' (' + this.args[2] + ') * ' + this.ratio : this.args[2] * this.ratio;
    cvd[3] = _.isNaN(this.args[3] * this.ratio) ? ' (' + this.args[3] + ') * ' + this.ratio : this.args[3] * this.ratio;
    cvd[4] = _.isNaN(this.args[4] * this.ratio) ? ' (' + this.args[4] + ') * ' + this.ratio : this.args[4] * this.ratio;
    cvd[5] = _.isNaN(this.args[5] * this.ratio) ? ' (' + this.args[5] + ') * ' + this.ratio : this.args[5] * this.ratio;

    log('BeginRadialGradientStroke convert (' + this.src + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};

