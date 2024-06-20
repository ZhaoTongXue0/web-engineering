const {RuleTester} = require('eslint');
const rule = require('../rules/no-http-url');

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2015,
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  }
});

ruleTester.run('no-http-url', rule, {
  valid: [{
    code: "var test = 'https://chenghuai.com';",
  }],
  
  invalid: [
    {
      code: "var test = 'http://chenghuai.com';",
      output: "var test = 'http://chenghuai.com';",
      errors: [{
        message: 'Recommended "http://chenghuai.com" switch to HTTPS',
      }],
    },
    {
      code: "<img src='http://chenghuai.com' />",
      output: "<img src='http://chenghuai.com' />",
      errors: [
        {
          message: 'Recommended "http://chenghuai.com" switch to HTTPS',
        },
      ],
    },
  ],
});
