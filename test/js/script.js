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


function sum(a) {
  return function(b) {
    return a + b;
  }
}
console.log(sum(5)(1))


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

users.sort(function(a, b) {
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
  var result = [];
  for(var i = 0; i < arr.length; i++) {
    if(func(arr[i])) {
    result.push(arr[i])
  }
  }
  return result;
}

alert(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6

function inBetween(a,b) {
  return function(c){
    return (c >= a) && (c <= b);
  }
}

function inArray(array){
  return function(a){
    return array.indexOf(a) != -1;
  }
}
alert( filter(arr, inBetween(3, 6)) ); 

alert( filter(arr, inArray([0, 0, 3, 4])) );
function makeArmy() {

  var shooters = [];
  
  for (var i = 0; i < 10; i++) {
    var shooter = function() { // функция-стрелок
      alert( i ); // выводит свой номер
    };
    shooters.push(shooter);
  }
  return shooters;
}

var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[5]();     // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9
let a = (1,5,8 - 1) * 2;

alert(a);

var arr = ["a", "b", function() {
  alert( this );
}];

arr.push(function() {
  alert( 1 );
})

arr[2](); // "a","b",function

const reverseInt = (str) => {
  let arr = [],
      n,
      result = '';
      str += '';
      str[0] === '-' ? n = 1 :  n = 0;
  for ( let i = str.length - 1; i >= n; i -- ) {
   result += str[i];
  }
  str[0] === '-' ? result = -result :  result = +result;
  return result;
}
console.log(reverseInt(-12));


const invertCase = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i +=1) {
    if (str[i].toUpperCase() === str[i].toLowerCase) {
      result += str[i];
    } else if (str[i].toUpperCase() === str[i]){
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }
  return result;
}
console.log(invertCase('ПрИВЕтиЩе'));
*/

const dnaToRna = (str) => {
 // str === '' ? return '';
  const dna = ['A', 'C', 'G', 'T'];
  outer: for (let i = 0; i < str.length; i += 1) {
    for (let j = 0; j < dna.length; j += 1) {
      if (str[i] === dna[j]) {
        break outer;
      } 
    } 
    return null
  }
  //const rna = ['U', 'G', 'C', 'A'];
}
console.log(dnaToRna('AVG'));