function extend<T, U>(first: T, second: U): T & U {
    return {...first, ...second};
}

const x = extend({a: 'hello'}, {b: 42});

const a = x.a;
const b = x.b;
