const Dotenv = require('dotenv-webpack');

module.exports = (env) => ({
  externals: {
    'aws-sdk': 'AWS',
    '@material-ui/core': 'MaterialUI',
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new Dotenv({ path: `./.env.${env}` })
  ]
});
