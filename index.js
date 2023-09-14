import inquirer from 'inquirer';

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter text for logo (3 characters max.): ',
      name: 'logoText',
      // ? Validate + function will only allow for 3 char input. Prompts will be halted until 3 char input. 
      validate: function(value) {
        if (value.length === 3) {
          return true;
        } else {
          return 'Username should be exactly 3 characters';
        }
    }},
    {
      type: 'input',
      message: 'Enter the text color or hex #: ',
      name: 'textColor',
    },
    {
        type: 'list',
        message: 'Please select logo shape: ',
        name: 'logoShape',
        choices: ['circle', 'triangle', 'square'],
      },
    {
        type: 'input',
        message: 'Enter the shape color or hex #:',
        name: 'shapeColor',
      },

  ])
  //* This needs to be fixed to validate the responses instead of the old stuff
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
