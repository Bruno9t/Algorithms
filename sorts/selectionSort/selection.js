const indexOfMin = (array, startIndex)=>{
    let minValue = array[startIndex]
    let minIndex = startIndex

    for (let i = minIndex+1;i<array.length;i++){
        if (array[i] < minValue){
            minIndex = i
            minValue = array[i]
        }
    }

    return minIndex
}

module.exports= indexOfMin
