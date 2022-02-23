function checkNum(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;
} 

function simpleNum(numLength) {
    let numbers = [];
    for (let i = 2; numbers.length < numLength; i++) {
        if (checkNum(i)) {
            numbers.push(i);
        }
    }
    return numbers;
}

console.log(simpleNum(+process.argv[2]));