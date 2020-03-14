const swap = require('./swap')
const indexOfMin = require('./selection')

const array = [23,212,44,4555,67,43,2,3432,2121,37,6543,743,4,567,864,322,121,2232,3231,2432,2324
    ,2342,4324,3243,3,4354,3,2342,34,3,-1,56,6,87,980,0,9473,-23]


function selectionSort(array){
    let min

    for(let j = 0; j < array.length; j++){
        min = indexOfMin(array, j)

        swap(array, j, min)
    }

    return array
}


