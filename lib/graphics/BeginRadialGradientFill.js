var BaseConverter = require('../BaseConverter');
var log           = require('../util/logger').log;
var _             = require('lodash');

module.exports = BeginRadialGradientFill;

function BeginRadialGradientFill(src, ratio) {
    this.src = src;
    this.ratio = ratio;
    this.parseArguments();
}

BeginRadialGradientFill.prototype = new BaseConverter();

BeginRadialGradientFill.execute = function(src, ratio) {
    var beginRadialGradientFill = new BeginRadialGradientFill(src, ratio);

    return beginRadialGradientFill.convert();
};

BeginRadialGradientFill.prototype.convert = function() {
    var cvd = [];

    cvd[0] = this.args[0];
    cvd[1] = this.args[1];
    cvd[2] = _.isNaN(this.args[2] * this.ratio) ? ' (' + this.args[2] + ') * ' + this.ratio : this.args[2] * this.ratio;
    cvd[3] = _.isNaN(this.args[3] * this.ratio) ? ' (' + this.args[3] + ') * ' + this.ratio : this.args[3] * this.ratio;
    cvd[4] = _.isNaN(this.args[4] * this.ratio) ? ' (' + this.args[4] + ') * ' + this.ratio : this.args[4] * this.ratio;
    cvd[5] = _.isNaN(this.args[5] * this.ratio) ? ' (' + this.args[5] + ') * ' + this.ratio : this.args[5] * this.ratio;
    cvd[6] = _.isNaN(this.args[6] * this.ratio) ? ' (' + this.args[6] + ') * ' + this.ratio : this.args[6] * this.ratio;
    cvd[7] = _.isNaN(this.args[7] * this.ratio) ? ' (' + this.args[7] + ') * ' + this.ratio : this.args[7] * this.ratio;


    log('BeginRadialGradientFill convert (' + this.src + ') -> (' + cvd.join(', ') + ')');

    return cvd.join(',');
};

