// Babel configuration
// https://babeljs.io/docs/usage/api/
module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
          },
        },
      ],
      '@babel/preset-react',
    ],
    ignore: ['node_modules', 'build'],
    plugins: [['@babel/plugin-proposal-class-properties', { loose: false }]],
  };
  