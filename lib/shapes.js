import { writeFileSync } from 'fs';

export function generateSVG(shape) {
    let svg = '';

    const { text, textColor, shapeType, shapeColor } = shape;

    const baseSVG = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">`;
    const endSVG = `</svg>`;

    switch (shapeType) {
        case 'circle':
            svg += `<circle cx="100" cy="100" r="50" fill="${shapeColor}" />`;
            break;
        case 'square':
            svg += `<rect x="50" y="50" width="100" height="100" fill="${shapeColor}" />`;
            break;
        case 'triangle':
            svg += `<polygon points="100,50 150,150 50,150" fill="${shapeColor}" />`;
            break;
    }

    svg += `<text x="100" y="100" font-family="Arial" font-size="24" fill="${textColor}" text-anchor="middle" dy=".3em">${text}</text>`;
    return baseSVG + svg + endSVG;
}

export function saveSVGToFile(svgContent, filename) {
    writeFileSync(filename, svgContent);
}
