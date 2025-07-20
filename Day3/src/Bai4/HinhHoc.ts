abstract class Shape {
    abstract calculateArea(): number;
}

class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    public calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    public calculateArea(): number {
        return this.width * this.height;
    }
}
 const circle = new Circle(5);
 const rectangle = new Rectangle(4, 6);

 console.log("Diện tích hình tròn:", circle.calculateArea());
 console.log("Diện tích hình chữ nhật:", rectangle.calculateArea());
