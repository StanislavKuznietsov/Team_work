// Hi again =)
"use strict"
// function fib(n) {
//     return (n <= 1) ? 1 : fib(n-1) + fib(n-2)
// }

function fib(n) {
    return (n <= 1) ? 1 : fib(n - 1) + fib(n - 2)
}

for (let i = 0; i <= 42; i++) {
    console.log(i, fib(i))
}

<<<<<<< HEAD
let k = 10;
const b = 20;var h= 2222;
=======
function pascalTriangle(row, col) {
    if (col === 0) {
        return 1;
    } else if (row === 0) {
        return 0;
    } else {
        return pascalTriangle(row - 1, col) + pascalTriangle(row - 1, col - 1);
    }
}

let k = 10;

k = 42;
// another change

class Pascal{

    constructor(row ,col){
        this.row = row;
        this.col = col; 
    }

    pascalTriangle(row,col){
        if (col === 0) {
            return 1;
        } else if (row === 0) {
            return 0;
        } else {
            return pascalTriangle(row - 1, col) + pascalTriangle(row - 1, col - 1);
        }
    }
}

const pascal = new Pascal(2,3);
console.log(pascal.pascalTriangle(2,5));
console.log(pascal);
>>>>>>> c917544c5c40a9048e3b473930f06f2dfd3de004
