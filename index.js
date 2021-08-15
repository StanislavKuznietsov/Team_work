// Hi again =)

function fib(n) {
    return (n <= 1) ? 1 : fib(n-1) + fib(n-2)
}

for (let i = 0; i <= 42; i++){
    console.log(i, fib(i))
}

function pascalTriangle(row, col) {
    if (col === 0) {
        return 1;
    } else if (row === 0) {
        return 0;
    } else {
        return pascalTriangle(row - 1, col) + pascalTriangle(row - 1, col - 1);
    }
}