class Something {
    static instances = 0;
    constructor() {
        Something.instances++;
    }
}

const s1 = new Something();
const s2 = new Something();
console.log(Something.instances)