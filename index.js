import inquirer from 'inquirer';
import { generateSVG, saveSVGToFile } from './lib/shapes.js';

const shapeObject = {
    text: "",
    textColor: "",
    shapeType: "",
    shapeColor: ""
};

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
  .then(response => {
    const { logoText, textColor, logoShape: shape, shapeColor } = response;

    shapeObject.text = logoText;
    shapeObject.textColor = textColor;
    shapeObject.shapeType = shape;
    shapeObject.shapeColor = shapeColor;

    const svgContent = generateSVG(shapeObject);
    saveSVGToFile(svgContent, 'output.svg');
    console.log('Logo saved to output.svg');
  });
