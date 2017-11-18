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
