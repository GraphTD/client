const { default: serve } = require("./tasks/serve");
const { default: build } = require("./tasks/build");

exports.serve = serve;
exports.build = build;
exports.default = build;
