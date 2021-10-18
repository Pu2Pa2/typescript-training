interface hoge {
    aaa: number
    bbb: number
}
const hogeVar: hoge = {
    aaa: 123,
    bbb: 456
}
console.log(hogeVar)

interface hoge {
    ccc: number
}

const hogeVar2: hoge = {
    ccc: 789
}
console.log(hogeVar2)
