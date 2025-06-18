// Our application works with an array of shapes and can calculate the area of each shape.
namespace L_SOLUTION {
    abstract class Shape {    
        constructor(private name: string) {}

        abstract area(): number;
    }

    class Rectangle extends Shape {
        constructor(name: string, private width: number, private height: number) {
            super(name);
            this.width = width;
            this.height = height;
        }

        area(): number {
            return this.width * this.height;
        }
    }

    class Square extends Rectangle {
        constructor(name: string, side: number) {
            super(name, side, side);
        }
    }

    class Circle extends Shape {
        constructor(name: string, private radius: number) {
            super(name);
            this.radius = radius;
        }

        area(): number {
            return Math.PI * this.radius * this.radius;
        }
    }

    class AreaCalculator {
        constructor(protected shapes: Shape[]) {}

        calculateArea() {       
            // Solved: Each Shape has to implement its own area method
            // Solved: The AreaCalculatorO calls a method on each shape to get its area
            return this.shapes.reduce((sum, shape) => {
                if (shape instanceof Shape) {
                    return sum + shape.area();
                } else {
                    throw new Error("Shape is not a ShapeO");
                }
            } , 0);
        }
    }

    const calculator = new AreaCalculator([new Circle("Circle", 10), new Square("Square", 10), new Rectangle("Rectangle", 10, 20)]);
    
    class VolumeCalculator extends AreaCalculator {
        constructor(shapes: Shape[]) {
            super(shapes);
        }

        // SOLVED: Parent class and child class have the same method signature. Both return a number.
        calculateArea() {
            return this.shapes.reduce((sum, shape) => {
                if (shape instanceof Shape) {
                    return sum + shape.area();
                } else {
                    throw new Error("Shape is not a ShapeO");
                }
            } , 0);
        }
    }

    class CalculatorOutputter {
        constructor(private calculator: AreaCalculator | VolumeCalculator) {}

        toString() {
            return `The total area of the shapes is ${this.calculator.calculateArea()}`;
        }
    }

    const outputter = new CalculatorOutputter(calculator);
}