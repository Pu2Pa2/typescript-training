function reverse<T>(items: T[]): T[] {
    const toreturn = [];
    for (let i = items.length - 1; i >= 0; i--) {
        toreturn.push(items[i]);
    }
    return toreturn;
}

const sample = [1, 2, 3];
let reversed = reverse(sample);
console.log(reversed);

reversed[0] = '1';
reversed = ['1', '2']

reversed[0] = 1;
reversed = [1, 2]