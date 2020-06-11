function isValidIP(str) {
    const numbers = str.split('.');

    if (numbers.length !== 4) {
        return false;
    }

    for (let i = 0; i < numbers.length; i++) {

        const notANumber = isNaN(numbers[i]);
        const outOfBoundsError = +numbers[i] > 255 || +numbers[i] < 0;
        const invalidInteger = `${+numbers[i]}`.length !== numbers[i].length;

        if (notANumber || outOfBoundsError || invalidInteger) {
            return false;
        }
    }

    return true;
}

function isValidIPRegEx(str) {
    return  /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str)
}

