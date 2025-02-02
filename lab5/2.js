/**
 * Напишите функцию curry(f),
 * входные данные - функция
 * выходные данные - функция, или результат если количество аргументов достаточно
 * Примеры:
 *
 * function add(a, b, c) {
 *  return a + b + c;
 * }
 *
 * console.log(curry(add)(1)(2)(3)); //6
 * console.log(curry(add)(1)(2, 3)); //6
 * console.log(curry(add)(1, 2, 3)); //6
 */
function curry(f) {
    //code here
    nextCurry = function (...temp) {
        return (temp.length >= f.length) ? f(...temp) : (...nextTemp) => nextCurry(...temp.concat(nextTemp));
    }
    return nextCurry;
}

module.exports = curry;
