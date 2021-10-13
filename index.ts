interface Name {
    first: string;
    second: string;
}

let myname: Name;
myname = {
    first: 'John',
    second: 'Doe'
};

myname = {
    first: 'John'
};

myname = {
    first: 'JOhn',
    second: 1337
}