/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    let zipStr = '';
    let buffChar = str[0];
    let counter = 0;
    for (let i = 0; i <= str.length; ++i) {
        if (str[i] == buffChar) {
            counter++;
        } else {
            if (counter > 1) {
                zipStr += buffChar;
                zipStr += counter;
            } else {
                zipStr += buffChar;
            }
            counter = 1;
            buffChar = str[i];
        }
    }
    return zipStr;
}

module.exports = rle;
