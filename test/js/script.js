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
 console.log(smallestDivisor(10));//smallestDivisor(1); 
 
 //Test scope

function outer() {
  var x = 1,
      y = 5,
      z = 10;
    return (function() {
      return z-- 
    })();
};
var variable0 = outer;
console.log(variable0());



var a = 1;

function getFunc() {
  var a = 2;

  var func = new Function('', 'alert(a)');

  return func();
}

getFunc(); 

*/
function sum(a) {
  return function(b) {
    return a + b;
  }
}
console.log(sum(5))
/*
function makeBuffer() {
  var result = '';
  return function buffer( newValue ){
    if(typeof(newValue) === 'undefined'){
      return result
    }
    buffer.clear = function(){
      result = '';
    }
    result += newValue;
  }
}
var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
alert( buffer() ); // Тест тебя не съест

buffer.clear();

alert( buffer() ); // ""

var users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];

/*users.sort(function(a, b) {
  return a.age > b.age ? 1 : -1;
});
console.log(users)

function byField(field) {
  return function(a, b) {
    return a[field] > b[field] ? 1 : -1;
  }
}
users.sort(byField('age'));
users.forEach(function(user) {
  alert( user.name );
});
var arr = [1, 2, 3, 4, 5, 6, 7];
function filter(arr, func) {
  return arr.filter(func);
}

function inBetween(a,b) {
  return arr.filter(function(c){
    return (c >= a) && (c <= b);
  })
}
alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6
/*alert(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6*/