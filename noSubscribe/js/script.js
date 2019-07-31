/* Напишите функцию diff, которая принимает два угла (integer), каждый от 0 до 360, и возвращает наименьшую разницу между ними.

Примеры:

diff(0, 45) === 45;         // не 315, а 45, потому что 45 меньше
diff(0, 180) === 180;
diff(0, 190) === 170;       // не 190, а 170, потому что 170 меньше
diff(120, 280) === 160;*/

//export const diff = (angle1, angle2) => {
 //   const predicat = Math.abs((angle1 - angle2)) >= 180;
//    const x = angle1 > angle2 ? 360 - angle1 : 360 - angle2;
//    return predicat ? x : Math.abs((angle1 - angle2));
//};
//console.log(diff(40, 200));


/*
Создайте функцию isPerfect, которая принимает число и возвращает true, если оно совершенное, и false — в ином случае.

Совершенное число — это положительное целое число, равное сумме его положительных делителей (не считая само число).
 Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.
 */
//const isPerfect = (num) => {
//    const iter = (div, acc) => {
//      if (div === 0) {
 //       return result;
 //     }
//      return iter(div - 1, num % div === 0 ? acc += div : acc)
 //   };
//    return iter(num - 1, 0) === num ? true : false;
//};
//console.log(isPerfect(8128));

/*
Сумма квадратов первых десяти натуральных чисел это 12 + 22 + 32 + ... + 10 2 = 385.

Квадрат суммы первых десяти натуральных чисел это (1 + 2 + 3 + ... + 10)2 = 552 = 3025.

Разница между квадратом суммы и суммой квадратов первых десяти натуральных чисел: 3025 − 385 = 2640.

Напишите функцию sumSquareDifference, которая принимает аргумент n
 и возвращает разницу между квадратом суммы и суммой квадратов первых n натуральных чисел.

const sumSquareDifference = (n) => {
  const iter = (item, acc1, acc2) => {
    if (item === n + 1) {
      return acc2 ** 2 - acc1;
    }
    return iter(item + 1, acc1 += item ** 2, acc2 += item);
  };
  return iter(0, 0, 0);
};
console.log(sumSquareDifference(10));

Реализуйте и экспортируйте по умолчанию каррированую версию функции, которая принимает на вход
три строки и возвращает новую строчку составленную из трех входных.

// исходная версия
concat('a', 'bc', 'f'); // => abcf

// каррированая версия
concat('a')('bc')('f'); // => abcf

const concat = (x) => (y) => (z) => `${x}${y}${z}`;
console.log(concat('a')('bc')('f'));


С точки зрения математики, композиция функций f и g - новая функция z = f(g(x)).

compose.js
Реализуйте и экспортируйте по умолчанию функцию compose, которая принимает на вход две других одноаргументных функции и возвращает новую функцию. 
Эта новая функция также принимает на вход один параметр и при вызове применяет его последовательно к переданным функциям в обратном порядке.

Примеры ниже помогут понять, как должна работать функция:

const f = compose(Math.sqrt, Math.abs);
f(-4); // => 2

compose(v => v, v => v)(10); // => 10
compose(v => v + 2, v => v)(10); // => 12
compose(v => v, v => v - 2)(10); // => 8
compose(v => v ** 2, v => v - 2)(2); // => 0
compose(v => v - 2, v => v ** 2)(2); // => 2

const compose = (f1, f2) => f3 = (x) => f1(f2(x));




Реализуйте и экспортируйте по умолчанию функцию isPowerOfThree, которая определяет, является ли переданное число натуральной степенью тройки.
 Например, число 27 — это третья степень: 3^3, а 81 — это четвёртая: 3^4.

Пример:

isPowerOfThree(1); // true (3^0)
isPowerOfThree(2); // false
isPowerOfThree(9); // true (3^2)

const isPowerOfThree = (num) => {
  const iter = (acc) => {
    if (acc !== Math.round(acc)) return false;
    if (acc === 1) return true;
    return iter(acc / 3);
  };
  return iter(num)

}
console.log(isPowerOfThree(720));

Счастливым билетом называют такой билет с шестизначным номером, где сумма первых трех цифр равна сумме последних трех.

Например, билет с номером 385916 - счастливый, так как 3 + 8 + 5 = 9 + 1 + 6

isHappyTicket.js
Напишите и экспортируйте по умолчанию функцию, проверяющую является ли номер счастливым
(номер может быть как числового, так и строкового типа: см. примеры ниже). 
Функция должна возвращать true, если билет счастливый, или false, если нет.

Примеры использования:

import isHappyTicket from './isHappyTicket';

isHappyTicket(385916); // true
isHappyTicket(231002); // false
isHappyTicket(128722); // true
isHappyTicket('054702'); // true

const isHappyTicket = (num) => {
  num = num + '';
  let first = 0;
  let second = 0;
  for (let i = 0; i < num.length / 2; i += 1) {
    first += +num[i];
  }
  for (let i = num.length / 2; i < num.length; i += 1) {
    second += +num[i];
  }
  return first === second ? true : false;
};
console.log(isHappyTicket(385916));


*/