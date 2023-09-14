import inquirer from 'inquirer';
import { Circle, Square, Triangle } from './lib/shapes.js';

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter text for logo (3 characters max.): ',
      name: 'logoText',
      validate: function(value) {
        if (value.length === 3) {
          return true;
        } else {
          return 'Logo text should be exactly 3 characters';
        }
      }
    },
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
  .then(response => {
    const { logoText, textColor, logoShape, shapeColor } = response;

    let shapeObject;
    switch (logoShape) {
      case 'circle':
        shapeObject = new Circle(logoText, textColor, shapeColor);
        break;
      case 'triangle':
        shapeObject = new Triangle(logoText, textColor, shapeColor);
        break;
      case 'square':
        shapeObject = new Square(logoText, textColor, shapeColor);
        break;
      default:
        console.error("Invalid shape type!");
        return;
    }

    shapeObject.saveToFile('examples/output.svg');
    console.log('Logo successfully saved to output.svg');
  });
