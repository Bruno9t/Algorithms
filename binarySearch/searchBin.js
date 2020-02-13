const array = require('./array')
function middle(array,max,min){
    return Math.floor((max+min)/2)
}

var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length-1;
    var guess,count=0;

    while(max>=min){
        guess = middle(array,max,min);
        count++
        console.log(array.slice(min,max+1))
        
        if(array[guess] === targetValue){
            console.log(`\nNúmero de tentativas: ${count}`)

            return '\n'+guess
        }else if(array[guess] < targetValue){
            min = guess + 1;
            
        }else{
            max = guess - 1;
        }
    }
    console.log(`\nNúmero de tentativas: ${count}`)

	return -1;
};

console.log(doSearch(array,420))