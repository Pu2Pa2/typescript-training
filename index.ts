class FooBase {
    public x: number;
    private y: number;
    protected z: number;
}

const foo = new FooBase();
foo.x;
foo.y;
foo.z;

class FooChild extends FooBase {
    constructor() {
        super();
        this.x;
        this.y;
        thix.z;
    }
}