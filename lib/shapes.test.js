import { Triangle, Circle, Square } from 'lib/shapes.js';

describe('Shapes Tests', () => {
  test('Triangle SVG Rendering', () => {
    const triangle = new Triangle("T", "#fff", "blue");
    expect(triangle.generateSVG()).toContain('<polygon points="100,50 150,150 50,150" fill="blue" />');
  });

  test('Circle SVG Rendering', () => {
    const circle = new Circle("C", "#fff", "red");
    expect(circle.generateSVG()).toContain('<circle cx="100" cy="100" r="50" fill="red" />');
  });

  test('Square SVG Rendering', () => {
    const square = new Square("S", "#fff", "green");
    expect(square.generateSVG()).toContain('<rect x="50" y="50" width="100" height="100" fill="green" />');
  });

});
