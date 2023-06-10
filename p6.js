class Shape {
    constructor(sides = []){
        this.sides = sides;
    }
    perimeter = () =>
    this.sides.length > 0 ? 
    this.sides.reduce((total, sides) => total + sides) : 0;
}
//test shape
console.log(new Shape([5, 10]).perimeter());  // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0


class Rectangle extends Shape {
    constructor(length = 0, width = 0){
        super([length, width, length, width]);
        this.length = length;
        this.width = width;
    }
    area() {
        return this.length * this.width;
    }
}
//test rectangle
console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area());  // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0

class Triangle extends Shape{
    constructor(sideA = 0, sideB = 0, sideC = 0){
        super([sideA, sideB, sideC]);
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    area(){
        let s = (this.sideA + this.sideB + this.sideC)/2;
        return Math.sqrt(s*(s - this.sideA)*(s - this.sideB)*(s - this.sideC));
    }
}
//test triangle
console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0

const data = [[3, 4], [5, 5], [3, 4, 5], [10], []];

for (const sides of data){
    let shape = null;
    let shapeName = '';

    switch(sides.length){
        case 2:
            shape = new Rectangle(...sides);
            shapeName = 'Rectangle';
            break;
        case 3:
            shape = new Triangle(...sides);
            shapeName = 'Triangle'
            break;
    }
    const perimeter = shape ? shape.perimeter() : 0;
    const area = shape ? shape.area() : 0;

    if(sides.length < 2){
        console.log(`Shape with ${sides.length} sides unsupported`);
    }else{
        console.log(`${shapeName} with sides ${sides.toString()} has perimeter of ${perimeter} and area of ${area} `)
    }
}