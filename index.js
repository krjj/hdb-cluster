const fs = require('fs')

var arr = []

fs.readFileSync('./input.txt', 'utf8').split(/\r?\n/).forEach(function (line, li) {
    let tempArr = []
    for (var i = 0; i < line.length; i++) {
        tempArr.push(line.charAt(i))
    }
    arr.push(tempArr)
})

var counter = 0
var clusters = 0

function traverse(array, i, j) {
    let rowLimit = array.length - 1;
    let columnLimit = array[0].length - 1;
    // find neighbouring elements
    for (let x = Math.max(0, i - 1); x <= Math.min(i + 1, rowLimit); x++) {
        for (let y = Math.max(0, j - 1); y <= Math.min(j + 1, columnLimit); y++) {
            if (x !== i || y !== j) {
                if (array[x][y] == '+') {
                    array[x][y] = '*'
                    counter++
                    traverse(array, x, y)
                }
            }
        }
    }

}

function init() {
    for (let i = 0; i < arr.length; i++) {
        let column = arr[i]
        for (let j = 0; j < column.length; j++) {
            counter = 0
            traverse(arr, i, j)
            if (counter > 1) {
                clusters++
            }
        }
    }
    return clusters
}


console.log(init())



