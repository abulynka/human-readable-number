module.exports = function toReadable (number) {
    const firstNine = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    };

    const exact = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    };

    const secondTens = {
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    };

    const second = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    };

    if (number === 0) {
        return 'zero';
    }

    // 1-10
    if (firstNine.hasOwnProperty(number)) {
        return firstNine[number];
    }

    // 11-19
    if (exact.hasOwnProperty(number)) {
        return exact[number];
    }

    if (secondTens.hasOwnProperty(number)) {
        return secondTens[number];
    }

    const digits = number.toString().split('');

    // 20 - 99
    if (number < 100) {
        return second[digits[0]] + ' ' + firstNine[digits[1]];
    }

    if (digits[1] === '0' && digits[2] === '0') {
        return firstNine[digits[0]] + ' hundred';
    }

    const secondThird = Number.parseInt(digits[1] + digits[2]);
    console.log(secondThird)

    // 1-10
    if (firstNine.hasOwnProperty(secondThird)) {
        return firstNine[digits[0]] + ' hundred ' + firstNine[secondThird];
    }

    // 11-19
    if (exact.hasOwnProperty(secondThird)) {
        return firstNine[digits[0]] + ' hundred ' + exact[secondThird];
    }

    let result = firstNine[digits[0]] + ' hundred ' + second[digits[1]];
    if (digits[2] !== '0') {
        result += ' ' + firstNine[digits[2]];
    }

    return result;
}
