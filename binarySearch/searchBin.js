var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
function middle(array,max,min){
    return Math.floor((max+min)/2)
}

var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length-1;
    var guess;

    while(max>=min){
        guess = middle(array,max,min);

        console.log(array.slice(min,max+1))
        
        if(array[guess] === targetValue){
            return guess
        }else if(array[guess] < targetValue){
            min = guess + 1;
            
        }else{
            max = guess - 1;
        }
    }

	return -1;
};

console.log(doSearch(array,8))