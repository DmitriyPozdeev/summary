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
*/
