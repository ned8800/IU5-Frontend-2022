/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
    let i = 0;
    let BuffArr = JSON.parse(JSON.stringify(arr));
    let Angrs = [];
    let BuffAngr = [];
    for (i = 0; i < BuffArr.length; ++i) {
        BuffArr[i] = BuffArr[i].toLowerCase();
        BuffArr[i] = BuffArr[i].split("");
        BuffArr[i] = BuffArr[i].sort();
        BuffArr[i] = BuffArr[i].join("");
    }

    for (i = 0; i < BuffArr.length; ++i) {
        if (BuffArr.indexOf(BuffArr[i]) == i) {
            for (let j = 0; j < BuffArr.length; ++j) {
                if (BuffArr[i] == BuffArr[j]) {
                    BuffAngr.push(arr[j]);
                }
            }
            Angrs.push(BuffAngr);
            BuffAngr = [];
        }
    }
    return Angrs;
}



module.exports = getAnagramms;
