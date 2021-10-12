class Point {
    x: number;
    y: number;
    constructor(x: number, y: number ) {
        this.x = x;
        this.y = y;
    }
    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y)
    }
}

const p1 = new Point(0, 10);
const p2 = new Point(10, 20)
const p3 = p1.add(p2)
console.log(p3)

class Point3D extends Point {
    z: number;
    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.z = z
    }

    add(point: Point3D ) {
        const point2D = super.add(point)
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    }
}

const p13D = new Point3D(0, 10, 20);
const p23D = new Point3D(10, 20, 30);
const p33D = p13D.add(p23D)
console.log(p33D);
