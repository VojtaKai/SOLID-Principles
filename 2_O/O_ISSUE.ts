// Our application works with an array of shapes and can calculate the area of each shape.
namespace O_ISSUE {
    class Shape {
        constructor(private name: string) {}
    }
    
    class Rectangle extends Shape {
        constructor(name: string, public width: number, public height: number) {
            super(name);
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
    }
    
    
    class AreaCalculator {
        private shapes: Shape[];
        
        constructor(shapes: Shape[]) {
            this.shapes = shapes;
        }
    
        calculateArea() {       
            // ISSUE: Every time you introduce a new shape, you have to modify this class!
            // This is a violation of the OpenClosed Principle because 
            // every time you add a new shape, you have to modify this class!
            let area = 0;
            for (let shape of this.shapes) {
                if (shape instanceof Circle) {
                    // Solution: Move the logic to the Circle class + both classes have to implement an interface with the area method
                    area += Math.PI * shape.radius * shape.radius;
                } else if (shape instanceof Rectangle) {
                    // Solution: Move the logic to the Rectangle class + both classes have to implement an interface with the area method
                    area += shape.width * shape.height;
                }
            }
            return area;
        }
    }
    
    const calculator = new AreaCalculator([new Circle("Circle", 10), new Square("Square", 10), new Rectangle("Rectangle", 10, 20)]);
    console.log(calculator.calculateArea());
}

