class Shape {
    constructor(logoName, textColor, shapeColor) {
        this.logoName = data.logoName;
        this.textColor = data.textColor;
        this.shapeColor = data.shapeColor;
    }
}

class Circle extends Shape {
    constructor(logoName, textColor, logoShape, shapeColor) {
        super(logoName, textColor, shapeColor);
        this.logoShape = data.logoShape;
    }
}

class Triangle extends Shape {
    constructor(logoName, textColor, logoShape, shapeColor) {
        super(logoName, textColor, shapeColor);
        this.logoShape = data.logoShape;
    }
}

class Square extends Shape {
    constructor(logoName, textColor, logoShape, shapeColor) {
        super(logoName, textColor, shapeColor);
        this.logoShape = data.logoShape;
    }
}

function generateLogoMaker (data) {
    if (data.logoShape === "circle") {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${data.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.logoName}</text>
      
      </svg>`;
    } else if (data.logoShape === "triangle") {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="30 170, 270 170, 150 10" fill="${data.shapeColor}" />
    
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.logoName}</text>
    
    </svg>`;
    } else {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="70" y="20" width="160" height="160" fill="${data.shapeColor}" />
    
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.logoName}</text>
    
    </svg>`};
}

module.exports = generateLogoMaker;