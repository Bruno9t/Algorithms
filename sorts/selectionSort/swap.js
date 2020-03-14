const swap = (array,firstIndex,secondIndex)=>{
    let store1 = array[firstIndex]

    array[firstIndex] = array[secondIndex]
    array[secondIndex] = store1
}


module.exports = swap