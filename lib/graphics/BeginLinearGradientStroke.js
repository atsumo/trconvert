var BaseConverter = require('../BaseConverter');
var log           = require('../util/logger').log;
var _             = require('lodash');

module.exports = BeginLinearGradientStroke;

function BeginLinearGradientStroke(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

BeginLinearGradientStroke.prototype = new BaseConverter();

BeginLinearGradientStroke.execute = function(src, ratio) {
    var beginLinearGradientStroke = new BeginLinearGradientStroke(src, ratio);

    return beginLinearGradientStroke.convert();
};

BeginLinearGradientStroke.prototype.convert = function() {
    var cvd = [];

    cvd[0] = this.args[0];
    cvd[1] = this.args[1];
    cvd[2] = _.isNaN(this.args[2] * this.ratio) ? ' (' + this.args[2] + ') * ' + this.ratio : this.args[2] * this.ratio;
    cvd[3] = _.isNaN(this.args[3] * this.ratio) ? ' (' + this.args[3] + ') * ' + this.ratio : this.args[3] * this.ratio;
    cvd[4] = _.isNaN(this.args[4] * this.ratio) ? ' (' + this.args[4] + ') * ' + this.ratio : this.args[4] * this.ratio;
    cvd[5] = _.isNaN(this.args[5] * this.ratio) ? ' (' + this.args[5] + ') * ' + this.ratio : this.args[5] * this.ratio;
    
    log('BeginLinearGradientStroke convert (' + this.src + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};

