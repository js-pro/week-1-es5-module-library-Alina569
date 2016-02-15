// Sieve of Eratosthenes

// Input: an integer n > 1
//
// Let A be an array of Boolean values, indexed by integers 2 to n,
// initially all set to true.
//
// for i = 2, 3, 4, ..., not exceeding √n:
//   if A[i] is true:
//     for j = i2, i2+i, i2+2i, i2+3i, ..., not exceeding n :
//       A[j] := false
//
// Output: all i such that A[i] is true.

var primeNumbers = function(num) {
  var result = [];
  var arr = [];

  for(var i = 0; i < num; i++) {
    arr.push(true);
  }

  var max = Math.sqrt(num);
  for(var i = 2; i <= max; i++ ){
    if(arr[i]){
      var j = i*i;
      for(j; j < num; j+=i){
        arr[j] = false;
      }
    }
  }

  for(var i = 2; i < num; i++){
    if(arr[i]) {
      result.push(i);
    }
  }
  return result;
};

module.exports = {
  primeNumbers: primeNumbers
};
