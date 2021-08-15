// Hi again =)

function fib(n) {
    return (n <= 1) ? 1 : fib(n - 1) + fib(n - 2)
}

for (let i = 0; i <= 42; i++) {
    console.log(i, fib(i))
}

let k = 10;