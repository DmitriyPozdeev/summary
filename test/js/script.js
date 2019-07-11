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

3 5
01010111 1010111 1101011

010111
011011
011101
011110


1
const withoutTwoZeros = (zero, one) => {
  //let variant = '',
      result = 0,
      totalAmountElem = zero + one;

  if ((zero > 1) && (one < zero - 1)) return result; 
  if (zero === 1) return totalAmountElem;
 // const createEl = (count) => {
 /*   for (let i = 0; i < zero + one; i += 1) {
      i < zero * 2 && i % 2 === 0 ? variant += '0' : variant += '1'
    }
    while ()
 // }

return variant
}
console.log(withoutTwoZeros(6, 7));

00 - 1 эл
000 
1 1 // 2  / 0
2 1 // 1  / 1
3 1 // 0  / 2

1 2 // 3  011 101 110 /0
2 2 // 3  1010 0110 0101 /1
3 2 // 1   00011 /2
4 2 // 0  / 3

1 3 // 4 0111 1011 1101 1110 /0
2 3 // 6  01011 10101 11010  01101 01110 10110 /1 
3 3 // 2  010101 101010 /2
4 3 // 1  / 3
5 3 // 0  / 4

1 4 // 5 01111 10111 11011 11101 11110 /0
2 4 // 10 / 1  
3 4 // 8 0101011 1010101 1101010 0110101 0101101 0101110 011101 011110   /2
4 4 // 2 01010101 /3
5 4 // 1 /4
6 4 // 0 /5

const isPalindrome = (str) => {
 console.log(str);
  if (str.length < 2) {
    return true
  }
  if (str[0] != str[str.length - 1]) {
    return false
  } else {
    return isPalindrome(str.substring(1, str.length - 1));
  }
}
console.log(isPalindrome('radar'));
const substr = (str = '', begin = 0, subStrLength = str.length) => {
  let result = ''
  if (subStrLength < 0) {
    subStrLength = 1;
  } 
  if (begin < 0) { 
    begin = 1
   }
  if (begin > str.length) return result;
  if (subStrLength === 0) return result;
  if ((begin + subStrLength) > str.length) {
   subStrLength = str.length - begin;
  };
  console.log(subStrLength)
  console.log(begin)
  for (let i = begin; i < subStrLength; i += 1) {
    result += str[i];
  }
  return result; 
}
console.log(substr('abba', 1, 2))

apply = (amount, func, arg) => {
  let result = func(arg);
  if (amount === 0) return arg
  for (let i = 1; i < amount; i += 1) {
    result = func(result);
  }
  return result
} 
console.log(apply(0, v => v ** 2, 3)); // => 53
apply(2, Math.sqrt, 16); // => 2
// Math.sqrt(Math.sqrt(Math.sqrt(256)));

const apply = (amount, func, arg) => {
  if (amount === 0) return arg;
  if (amount > 0) {
    return apply(amount - 1, func, func(arg));
  }
};
console.log(apply(2, v => v ** 2, 3));

const apply = (count, fn, value) =>
  (count === 0 ? value : apply(count - 1, fn, fn(value)));

 const reverse = (str) => {
    const lastIndex = str.length - 1;
    // BEGIN (write your solution here)
    const iter = (index, acc) => {
      if (index <= lastIndex) {
       return iter(index + 1, acc = `${str[index]}` + acc) ;
      } else return acc
    }
    // END
    return iter(0, '');
  };
  console.log(reverse('яюэ'));
const flip = funct => (a, b) => funct(b, a);

  const sub = (a, b) => a - b;
const reverseSub = flip(sub); 
console.log(reverseSub);
console.log (reverseSub(5, 4))

const partialApply = (f, arg2) => arg1 => f(arg1, arg2);

const pow = (a, b) => a ** b;
const f1 = partialApply(pow, 2);
console.log(f1(1)); // => 1
console.log(f1(10)); // => 100

const f2 = partialApply((a, b) => a * b, 5);
console.log(f2(2)); // => 10
console.log(f2(5)); // => 25
*/

const True = () => one => two => one;
const False = () => one => two => two;
const If = func => one => two => func(func);
console.log(True)
const ConditionFunction = If(True);
console.log(ConditionFunction)
//(func) => one => two => func(one)
console.log(ConditionFunction('one')('two')); // one

//const ConditionFunction = If(False);
//console.log(ConditionFunction('one')('two')); // two