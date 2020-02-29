
const handlebars = require('handlebars');

// This example is based on an example from the
// handlebars npm package documentation at:
// https://www.npmjs.com/package/handlebars

const source = `
  <p>
    Hello, my name is {{name}}. I am from {{hometown}}.
    I have {{kids.length}} kids:
  </p>
  <ul>
    {{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}
  </ul>
`;

const template = handlebars.compile(source);
 
const data = {
  name: 'Alan',
  hometown: 'Somewhere, TX',
  kids: [
    {
      name: 'Jimmy',
      age: '12'
    },
    {
      name: 'Sally',
      age: '4'
    }
  ]
};

console.log(template(data));
