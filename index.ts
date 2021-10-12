interface IteratorResult<T> {
    done: boolean;
    value?: T;
}

interface Iterator<T> {
    next(value?: any): IteratorResult<T>;
    return?(value?: any): IteratorResult<T>;
    throw?(e?: any): IteratorResult<T>;
}

class Component {
    constructor(public name: string) {}
}

class Frame implements Iterator<Component> {
    private pointer = 0;

    constructor (public name: string, public components: Component[]) {}

    public next(): IteratorResult<Component> {
        if (this.pointer < this.components.length) {
            return {
                done: false,
                value: this.components[this.pointer++]
            }
        } else {
            return {
                done: true
            }
        }
    }
}

let frame = new Frame("Door", [new Component("top"), new Component("bottom"), new Component("left"), new Component("right")])
let iteratorResult1 = frame.next();
console.log(iteratorResult1);
let iteratorResult2 = frame.next();
console.log(iteratorResult2)
let iteratorResult3 = frame.next();
console.log(iteratorResult3);
let iteratorResult4 = frame.next();
console.log(iteratorResult4)

let components = iteratorResult1.value
console.log(components)