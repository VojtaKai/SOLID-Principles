namespace S_SOLUTION {
    // Our application works with an array of shapes and can calculate the area of each shape.

    // KEY NOTE: A shape’s single responsibility should include knowing its own properties
    // and how to perform operations intrinsically related to those properties, 
    // such as calculating its own area. 
    // The AreaCalculator should not need to know the specific formula for every shape.

    // SOLUTION:
    // If you add a new shape, you don't have to modify AreaCalculator class!
    abstract class Shape {
        constructor(private name: string) {}

        abstract calculateArea(): number;
    }

    class Rectangle extends Shape {
        constructor(name: string, public width: number, public height: number) {
            super(name);
        }

        calculateArea() {
            return this.width * this.height;
        }
    }

    class Square extends Rectangle {
        constructor(name: string, side: number) {
            super(name, side, side);
        }
    }

    class Circle extends Shape {
        constructor(name: string, public radius: number) {
            super(name);
        }

        calculateArea() {
            return Math.PI * this.radius * this.radius;
        }
    }


    class AreaCalculator {
        private shapes: Shape[];

        constructor(shapes: Shape[]) {
            this.shapes = shapes;
        }

        calculateTotalArea() {
            return this.shapes.reduce((sum, shape) => sum + shape.calculateArea(), 0);
        }
    }

    const calculator = new AreaCalculator([new Circle("Circle", 10), new Square("Square", 10), new Rectangle("Rectangle", 10, 20)]);
    console.log(calculator.calculateTotalArea());

    // The different formats of calculation outputs are now handled by a separate class.
    class SumCalculatorOutputter {
        private calculator: AreaCalculator;

        constructor(calculator: AreaCalculator) {
            this.calculator = calculator;
        }

        toString() {
            return `The total area of the shapes is ${this.calculator.calculateTotalArea()}`;
        }

        json() {
            return JSON.stringify({total_area: this.calculator.calculateTotalArea()}, undefined, 2);
        }

        html() {
            return `
            <div>
                <h1>The total area of the shapes is ${this.calculator.calculateTotalArea()}</h1>
            </div>
            `;
        }
    }

    const outputter = new SumCalculatorOutputter(calculator);
    console.log(outputter.json());
}