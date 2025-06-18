// Our application works with an array of shapes and can calculate the area of each shape.
namespace S_ISSUE {
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
            // This would be the ideal way as the OpenClosed Principle is followed as well as SRP.
            // return this.shapes.reduce((sum, shape) => sum + shape.area(), 0);
            
            // We are going to show the wrong way to do it.
            // ISSUE: Every time you introduce a new shape, you have to modify this class!
            let area = 0;
            for (let shape of this.shapes) {
                if (shape instanceof Circle) {
                    area += Math.PI * shape.radius * shape.radius;
                } else if (shape instanceof Rectangle) {
                    area += shape.width * shape.height;
                } 
            }
            return area;
        }
    
        // ISSUE: This method has nothing to do with the calculation of the area.
        // It presents data output / presentation. 
        // It is a violation of the Single Responsibility Principle.
        output() {
            return `The area of the shapes is ${this.calculateArea()}`;
        }
    }
    
    const calculator = new AreaCalculator([new Circle("Circle", 10), new Square("Square", 10), new Rectangle("Rectangle", 10, 20)]);
    console.log(calculator.calculateArea());
    
    
    // KEY NOTE: A shape’s single responsibility should include knowing its own properties
    // and how to perform operations intrinsically related to those properties, 
    // such as calculating its own area. 
    // The AreaCalculator should not need to know the specific formula for every shape.
}