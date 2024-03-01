//Constructor Shape, Circle, Triangle, and Rectangle imported
const Shape = require('../shapes.js');
const Triangle = require('../shapes.js');
const Circle = require('../shapes.js');
const Square = require('../shapes.js');
const generateLogoMaker = require('../shapes.js');

//A testing suite for testing a triangle is created
describe('generateLogoMaker', () => {
    describe('triangle', () => {
        it('should take in data as a triangle and produce a blue triangle', () => {
            const tri = new Triangle('AFK', 'white', 'triangle', 'blue');
            const logo = generateLogoMaker(tri);
            expect(logo).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <polygon points="30 170, 270 170, 150 10" fill="blue" />
        
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">AFK</text>`)
        });
    });
});

//A testing suite for testing a circle is created
describe('generateLogoMaker', () => {
    describe('circle', () => {
        it('should take in data as a circle and produce a blue circle', () => {
            const cir = new Circle("AFK", "white", "circle", "blue");
            const logo = generateLogoMaker(cir);
            expect(logo).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <circle cx="150" cy="100" r="80" fill="blue" />
          
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
          
          </svg>`)
        });
    });
});

//A testing suite for testing a square is created
describe('generateLogoMaker', () => {
    describe('square', () => {
        it('should take in data as a square and produce a blue square', () => {
            const squ = new Square("AFK", "white", "square", "blue");
            const logo = generateLogoMaker(squ);
            expect(logo).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <rect x="70" y="20" width="160" height="160" fill="blue" />
        
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
        
        </svg>`)
        });
    });
});