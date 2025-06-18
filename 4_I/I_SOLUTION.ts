// Our application works with an array of shapes and can calculate the area of each shape.
namespace I_SOLUTION {
    abstract class Shape {    
        constructor(private name: string) {}

        abstract area(): number;
    }

    // V1: Interface
    interface ThreeDShape extends Shape {
        // SOLVED: We have a separate interface for shapes that have a volume.
        volume(): number;
    }

    // V2 - Abstract class
    abstract class ThreeDShapeAbstract extends Shape {
        abstract volume(): number;
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

    // SOLVED: We have a separate interface for shapes that have a volume.
    class CuboidV1 extends Shape implements ThreeDShape {
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

    // SOLVED: We have a separate interface (abstract class) for shapes that have a volume.
    class CuboidV2 extends ThreeDShapeAbstract {
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