var isPalindrome = function (x) {
    if (x < 0) return false;
    x = x.toString();
    let len = x.length;
    let flag = true;
    for (let i = 0; i < len / 2; i++) {
        if (x[i] != x[len - 1 - i])
            flag = false;
    }
    return flag;
};
console.log(isPalindrome(1000021))