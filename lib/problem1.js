function showPrimes(n) {
    let listNumber = []
    for (let i = 2; i <= n; i++) {
        if (!isPrime(i)) continue;
        listNumber.push(i)
    }
    alert(`For n = ${number} prime numbers are ${listNumber}`)
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true
}


let number = Number(prompt("Enter a positive integer"))
for (;;) {
    if (Number.isInteger(number) && number >= 2) {
        showPrimes(number)
        break
    } else {
        number = Number(prompt("Enter a positive integer"))
    }
}