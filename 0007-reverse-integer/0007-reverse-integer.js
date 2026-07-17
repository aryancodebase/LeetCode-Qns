/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x);

    let reversed = 0;

    while (x > 0) {
        let digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }

    reversed *= sign;

    // Check 32-bit signed integer range
    if (reversed < -(2 ** 31) || reversed > (2 ** 31) - 1) {
        return 0;
    }

    return reversed;
};