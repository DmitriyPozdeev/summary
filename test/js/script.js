/*const smallestDivisor = (num) => {
   if (num > 1) {
      const iter = (counter, acc) => {
     if (acc === 0) {
       return counter
     } 
    //console.log(counter);
    //console.log(acc)
    return iter(++counter, num % counter);
    
 }
  return iter(2, num % 2)
} else

  return 1
 };
 console.log(smallestDivisor(10));//smallestDivisor(1); */
 
 //Test scope

function outer() {
  var x = 1,
      y = 5,
      z = 10;
    return function() {
      return z-- 
    }
};
var variable0 = outer();
console.log(variable0());

console.log(variable0());

console.log(variable0());