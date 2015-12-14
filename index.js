var csso = require('csso');

module.exports = function (file, options, cb) {
  var source = file.buffer.toString();
  try { source = csso.minify(source) + '\n'; }
  catch (er) { return cb(er); }
  cb(null, {buffer: new Buffer(source)});
};
