
function sumAll(arr) {
var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
});
  var min = arr.reduce(function(a, b) {
    return Math.min(a, b);
});
  var sum = 0 ;
  for(var i = min ; i <max ; i++){
    
    sum += i;
    
  }
  return sum + max  ;
}

sumAll([1, 4]);
