var GraphicsConverter  = require('./GraphicsConverter');
var TransformConverter = require('./TransformConverter');
var TweenConverter     = require('./TweenConverter');
var RectangleConverter = require('./RectangleConverter');
var SetRectangleConverter = require('./SetRectangleConverter');
var TextConverter      = require('./TextConverter');
var CacheConverter     = require('./CacheConverter');
var fs                 = require('fs');
var path               = require('path');
var _                  = require('lodash');

var TFCRatioConverter = function (source, ratio, base) {

    if ( ! fs.existsSync(source) ) {
        throw new Error(file + ' is not exists. please check filepath.');
    }

    this.sourceFile = source;
    this.lines      = fs.readFileSync(source, {encoding: 'utf8'}).split(/\n/);
    this.ratio      = ratio;
    this.base       = base;
    this.line       = 0;
};

TFCRatioConverter.prototype.convert = function() {

    var size  = this.lines.length,
        i     = 0,
        times = 0,
        src,
        analyze,
        tmp,
        ratio = this.ratio,
        base = this.base;

    var rate = _.isNaN(ratio/base) ?  '(' + ratio + '/' + base + ')' : ratio / base;

    for ( ; i < size; ++i ) {
        this.line = i + 1; // stack line
        src = this.lines[i];

        // Convert section ================================

        // Shortcut: skip empty line
        if ( src !== "" ) {

            // Convert transform size
            if ( /\.setTransform\(.+?\)/.test(src) ) {
                ++times;
                //console.log('line: ' + this.line + ' converting setTransform.');
                src = src.replace(/\.setTransform\((.+?)\)/g, function(match, args) {
                    return match.replace(args, TransformConverter.execute(args, rate));
                });
            }

            // convert regtangle size
            if ( /\.Rectangle\(.+?\)/.test(src) ) {
                ++times;
                //console.log('line: ' + this.line + ' converting cjs.rectangle.');
                src = src.replace(/\.Rectangle\((.+?)\)/, function(match, args) {
                    return match.replace(args, RectangleConverter.execute(args, rate));
                });
            }

            // convert regtangle size
            if ( /\.sourceRect(.+?)[.|;]/.test(src) ) {
                ++times;
                //console.log('line: ' + this.line + ' converting sourceRect.');
                src = src.replace(/(\{.+?\});/g, function(match, args) {
                    return match.replace(args, SetRectangleConverter.execute(args, rate))
                });
            }

            // Convert Tween.to method
            if ( /\.to\((.+?)\)[.|;]/.test(src) ) {
                ++times;
                //log('line: ' + this.line + ' checking tween.');
                src = src.replace(/to\((.+?)\)[.|;]/g, function(match, args) {
                    return match.replace(args, TweenConverter.execute(args, rate));
                });
            }

            // Convert Text size
            if ( /\.Text\((.+?)\)[.|;]/.test(src) ) {
                ++times;
                //log('line: ' + this.line + ' converting text size.');
                src = src.replace(/\.Text\((.+?)\)[.|;]/g, function(match, args) {
                    return match.replace(args, TextConverter.execute(args, rate));
                });
            }

            // Convert graphics =========================

            // moveTo
            if ( /\.(?:mt|moveTo)\(.+?\)/g.test(src) ) {
                ++times;
                //log('line: ' + this.line + ' converting moveTo.');
                src = src.replace(/\.(?:mt|moveTo)\((.+?)\)/g, function(match, args) {
                    return match.replace(args, GraphicsConverter.moveTo.execute(args, rate));
                });
            }

            // arc
            if ( /\.(?:a|arc)\(.+?\)/g.test(src) ) {
                ++times;
                //log('line: ' + this.line + ' converting arc.');
                src = src.replace(/\.(?:a|arc)\((.+?)\)/g, function(match, args) {
                    return match.replace(args, GraphicsConverter.arc.execute(args, rate));
                });
            }

            // arcTo
            if ( /\.(?:at|arcTo)\(.+?\)/g.test(src) ) {
                ++times;
                //log('line: ' + this.line + ' converting arcTo.');
                src = src.replace(/\.(?:at|arcTo)\((.+?)\)/g, function(match, args) {
                    return match.replace(args, GraphicsConverter.arcTo.execute(args, rate));
                });
            }

            // quadraticCurveTo
            if ( /\.(?:qt|quadraticCurveTo|curveTo)\(.+?\)/g.test(src) ) {
                ++times;
                //log('line: ' + this.line + ' converting quadraticCurveTo.');
                src = src.replace(/\.(?:qt|quadraticCurveToTo|curveTo)\((.+?)\)/g, function(match, args) {
                    return match.replace(args, GraphicsConverter.quadraticCurveTo.execute(args, rate));
                });
            }

            // lineTo
            if ( /\.(?:lt|lineTo)\(.+?\)/g.test(src) ) {
                ++times;
                //log('line: ' + this.line + ' converting lineTo.');
                src = src.replace(/\.(?:lt|lineTo)\((.+?)\)/g, function(match, args) {
                    return match.replace(args, GraphicsConverter.lineTo.execute(args, rate));
                });
            }

            // bezierCurveTo
            if ( /\.(?:bt|bezierCurveTo)\(.+?\)/g.test(src) ) {
                ++times;
                //log('line: ' + this.line + ' converting bezierCurveTo.');
                src = src.replace(/\.(?:bt|bezierCurveTo)\((.+?)\)/g, function(match, args) {
                    return match.replace(args, GraphicsConverter.bezierCurveTo.execute(args, rate));
                });
            }

            // rect
            if ( /\.(?:r|rect)\(.+?\)/g.test(src) ) {
                ++times;
                //log('line: ' + this.line + ' converting rect.');
                src = src.replace(/\.(?:r|rect)\((.+?)\)/g, function(match, args) {
                    return match.replace(args, GraphicsConverter.rect.execute(args, rate));
                });
            }

            // beginLinearGradientFill
            if ( /\.(?:lf|beginLinearGradientFill)\(.+?\)/g.test(src) ) {
                ++times;
                //log('line: ' + this.line + ' converting beginLinearGradientFill.');
                src = src.replace(/\.(?:lf|beginLinearGradientFill)\((.+?)\)(?:\.|;)/g, function(match, args) {
                    return match.replace(args, GraphicsConverter.beginLinearGradientFill.execute(args, rate));
                });
            }

            // beginLinearGradientStroke
            if ( /\.(?:ls|beginLinearGradientStroke)\(.+?\)/g.test(src) ) {
                ++times;
                //log('line: ' + this.line + ' converting beginLinearGradientStroke.');
                src = src.replace(/\.(?:lf|beginLinearGradientStroke)\((.+?)\)(?:\.|;)/g, function(match, args) {
                    return match.replace(args, GraphicsConverter.beginLinearGradientStroke.execute(args, rate));
                });
            }

            // beginRadialGradientFill
            if ( /\.(?:rf|beginRadialGradientFill)\(.+?\)/g.test(src) ) {
                ++times;
                //log('line: ' + this.line + ' converting beginRadialGradientFill.');
                src = src.replace(/\.(?:rf|beginRadialGradientFill)\((.+?)\)(?:\.|;)/g, function(match, args) {
                    return match.replace(args, GraphicsConverter.beginRadialGradientFill.execute(args, rate));
                });
            }

            // beginRadialGradientStroke
            if ( /\.(?:rs|beginRadialGradientStroke)\(.+?\)/g.test(src) ) {
                ++times;
                //log('line: ' + this.line + ' converting beginRadialGradientStroke.');
                src = src.replace(/\.(?:lf|beginRadialGradientStroke)\((.+?)\)(?:\.|:)/g, function(match, args) {
                    return match.replace(args, GraphicsConverter.beginRadialGradientStroke.execute(args, rate));
                });
            }

            // drawRect
            if ( /\.(?:dr|drawRect)\(.+?\)/.test(src) ) {
                ++times;
                //log('line: ' + this.line + ' converting drawRect.');
                src = src.replace(/\.(?:dr|drawRect)\((.+?)\)/g, function(match, args) {
                    return match.replace(args, GraphicsConverter.drawRect.execute(args, rate));
                });
            }

            // drawRoundRect
            if ( /\.(?:rr|drawRoundRect)\(.+?\)/.test(src) ) {
                ++times;
                //log('line: ' + this.line + ' converting drawRoundRect.');
                src = src.replace(/\.(?:rr|drawRoundRect)\((.+?)\)/g, function(match, args) {
                    return match.replace(args, GraphicsConverter.drawRoundRect.execute(args, rate));
                });
            }

            // drawRoundRectComplex
            if ( /\.(?:rc|drawRoundRectComplex)\(.+?\)/.test(src) ) {
                ++times;
                //log('line: ' + this.line + ' converting drawRoundRectComplex.');
                src = src.replace(/\.(?:rc|drawRoundRectComplex)\((.+?)\)/g, function(match, args) {
                    return match.replace(args, GraphicsConverter.drawRoundRectComplex.execute(args, rate));
                });
            }

            // drawEllipse
            if ( /\.(?:de|drawEllipse)\(.+?\)/.test(src) ) {
                ++times;
                //log('line: ' + this.line + ' converting drawEllipse.');
                src = src.replace(/\.(?:de|drawEllipse)\((.+?)\)/g, function(match, args) {
                    return match.replace(args, GraphicsConverter.drawEllipse.execute(args, rate));
                });
            }

            // drawCircle
            if ( /\.(?:dc|drawCircle)\(.+?\)/.test(src) ) {
                ++times;
                //log('line: ' + this.line + ' converting drawCircle.');
                src = src.replace(/\.(?:dc|drawCircle)\((.+?)\)/g, function(match, args) {
                    return match.replace(args, GraphicsConverter.drawCircle.execute(args, rate));
                });
            }

            // drawPolyStar
            if ( /\.(?:dp|drawPolyStar)\(.+?\)/.test(src) ) {
                ++times;
                //log('line: ' + this.line + ' converting drawPolyStar.');
                src = src.replace(/\.(?:dp|drawPolyStar)\((.+?)\)/g, function(match, args) {
                    return match.replace(args, GraphicsConverter.drawPolyStar.execute(args, rate));
                });
            }

            // decodePath
            if ( /\.(?:p|decodePath)\(.+?\)/.test(src) ) {
                ++times;
                //log('line: ' + this.line + ' converting decodePath.');
                src = src.replace(/\.(?:p|decodePath)\((.+?)\)/g, function(match, args) {
                    return match.replace(args, GraphicsConverter.decodePath.execute(args, rate));
                });
            }

            // cache
            if ( /\.cache\(.+?\)/.test(src) ) {
                ++times;
                //console.log('line: ' + this.line + ' converting setTransform.');
                src = src.replace(/\.cache\((.+?)\)/g, function(match, args) {
                    return match.replace(args, CacheConverter.execute(args, rate));
                });
            }
        }

        this.lines[i] = src;
    }

    //log('Convert finished! ' + times + ' times convert proceeded.');

    return this.lines.join('\n');
};

TFCRatioConverter.prototype.getConvertedFileName = function() {
    var fileName  = path.basename(this.sourceFile).split('.'),
        ratio = _.isNaN(this.ratio * 10) ? this.ratio : this.ratio * 10,
        extension = fileName.pop();

    return process.cwd() + '/' + fileName.join('.') + '_' + ratio + '.' + extension;
};

module.exports = TFCRatioConverter;