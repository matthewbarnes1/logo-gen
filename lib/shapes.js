import { writeFileSync } from 'fs';

class Shape {
    constructor(text, textColor, shapeColor) {
        if (new.target === Shape) {
            throw new TypeError("Cannot instantiate abstract Shape class directly.");
        }
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    generateSVG() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                  ${this.getShapeSVG()}
                  ${this.getTextSVG()}
                </svg>`;
    }

    getTextSVG() {
        return `<text x="100" y="100" font-family="Arial" font-size="24" fill="${this.textColor}" text-anchor="middle" dy=".3em">${this.text}</text>`;
    }

    getShapeSVG() {
        throw new Error('Method "getShapeSVG" must be implemented in derived classes');
    }

    saveToFile(filename) {
        const svgContent = this.generateSVG();
        writeFileSync(filename, svgContent);
    }
}

class Circle extends Shape {
    getShapeSVG() {
        return `<circle cx="100" cy="100" r="50" fill="${this.shapeColor}" />`;
    }
}

class Square extends Shape {
    getShapeSVG() {
        return `<rect x="50" y="50" width="100" height="100" fill="${this.shapeColor}" />`;
    }
}

class Triangle extends Shape {
    getShapeSVG() {
        return `<polygon points="100,50 150,150 50,150" fill="${this.shapeColor}" />`;
    }
}

export { Circle, Square, Triangle };
