var romanToInt = function(s) {
    let o = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    },
    n = 0, len = s.length;
    for (let i = 0;i < len; i++){
        const temp = o[s[i]];
        if ( i < len - 1 && temp < o[s[i + 1]]){
            n -= temp;
        }
        else{
            n += temp;
        }
    }
    return n;
};
console.log(romanToInt("MCMXCIV"));