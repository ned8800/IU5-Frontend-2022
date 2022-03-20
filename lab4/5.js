/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Для прохождения тестов на эту задачу их необходимо раскоментить в файле tests/lab4.test.js
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

function checkBrackets(str) {
    let buffStr = JSON.parse(JSON.stringify(str));
    buffStr = buffStr.split('');
    let check1 = true;
    let check2 = false;
    while (check1 == true) {
        for (let i = 0; i < buffStr.length - 1; ++i) {
            if (buffStr[i] == '[' && buffStr[i + 1] == ']' || buffStr[i] == '(' && buffStr[i + 1] == ')' || buffStr[i] == '<' && buffStr[i + 1] == '>') {
                buffStr.splice(i, 2);
                check2 = true;
            }
        }
        if (check2 == true) {
            check2 = false;
        } else {
            check1 = false;
        }
    }
    if (buffStr.length > 0) {
        return false;
    } else {
        return true;
    }
}

module.exports = checkBrackets;
