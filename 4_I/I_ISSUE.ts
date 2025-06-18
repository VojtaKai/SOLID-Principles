// Our application works with an array of shapes and can calculate the area of each shape.
namespace I_ISSUE {
    abstract class Shape {    
        constructor(private name: string) {}

        abstract area(): number;

        // ISSUE: Some shapes don't have a volume but we are forcing them to implement it.
        // This is a violation of the Interface Segregation Principle.
        abstract volume(): number;
    }

    interface VolumeShape extends Shape {
        volume(): number;
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

    class Cuboid extends Shape {
        constructor(name: string, private length: number, private width: number, private height: number) {
            super(name);
        }

        area(): number {
            return this.length * this.width;
        }

        volume(): number {
            return this.length * this.width * this.height;
        }
    }
}