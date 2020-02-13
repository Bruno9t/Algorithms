const merge = require('./merge')

var mergeSort = function(array, p, r) {
    if(p<r){
        var q =  Math.floor((p+r)/2);
        mergeSort(array,p,q);
        mergeSort(array,q+1,r);
        merge(array,p,q,r);
    }
};
var array=[23,212,44,4555,67,43,2,3432,2121,37,6543,743,4,567,864,322,121,2232,3231,2432,2324
,2342,4324,3243,3,4354,3,2342,34,3,-1,56,6,87,980,0,9473,]

mergeSort(array,0,array.length-1)
console.log(array)