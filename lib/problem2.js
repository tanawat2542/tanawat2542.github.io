function displayStats(n) {
    let avg = 0
    for (let i = 0; i < n.length; i++) {
        avg = avg + n[i]
    }
    n.length == 0 ? alert(`For the list is empty, the average is 0, the minimum is 0, and the maximum is 0`) :
        alert(`For the list ${n}, the average is ${(avg / n.length).toFixed(2)}, the minimum is ${Math.min(...n)}, and the maximum is ${Math.max(...n)}`)
}

function readInput() {
    let listNumber = []
    let number = Number(prompt("Enter a integer (a negative integer to quit):"))
    for (;;) {
        if (Number.isInteger(number) && number >= 0) {
            listNumber.push(number)
            number = Number(prompt("Enter a integer (a negative integer to quit):"))
        } else if (Number.isInteger(number) && number < 0) {
            return listNumber
        } else {
            number = Number(prompt("Enter a integer (a negative integer to quit):"))
        }
    }

}

let list = readInput()
displayStats(list)