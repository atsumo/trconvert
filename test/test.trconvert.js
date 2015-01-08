var fs = require('fs');
var assert = require('assert');
var Converter = require('../lib/converter');

describe('trconvert', function() {
  it('should convert', function(done) {
    var tfc = new Converter('./test/sample.js', 1, 2);
    var buffer = tfc.convert();

    fs.readFile('./test/output.sample.js', function(err, data) {
      if (err) {
        return done(err);
      }

      var expect = String(data);
      assert.equal(buffer, expect);
      done();
    });
  });
});
