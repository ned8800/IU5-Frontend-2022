/**
 * Напишите функцию get1DArray(arr),
 * на вход подается массив бесконечной вложенности массивов arr
 * необходимо вернуть одномерный массив
 * Примеры:
 * [1, 2, 'aa', [1, 2, 3],
    [
        [1, 2],
        [1, 2]
    ],
    [
        [
            [1, 2, [1, 2, [2]]], 3
        ], 4
    ]
]; ---> [1, 2, "aa", 1, 2, 3, 1, 2, 1, 2, 1, 2, 1, 2, 2, 3, 4]
*/

function get1DArray(arr) {
    let zipArr = [];
    (function flat(arr) {
        arr.forEach(function (el) {
            if (Array.isArray(el)) {
                flat(el);
            } else {
                zipArr.push(el);
            }
        });
    })(arr);
    return zipArr;
}

module.exports = get1DArray;
