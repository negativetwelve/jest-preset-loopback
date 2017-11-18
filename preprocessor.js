// Originally documented here:
// https://github.com/strongloop/loopback/issues/3204
module.exports = {
  process(src) {
    return `
require.extensions = {
  '.js': function () {},
  '.json': function () {},
  '.node': function () {},
  '.ejs': function () {},
}
${src}`
  },
};
