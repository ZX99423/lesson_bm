// var reverse = function(x) {
//     let isnegative = x<0?ture:false;
//     let num = (isnegative?-x:x).toString().split("").reverse().join('');
//     num = isnegative?-num:+num;
//     let outrange = num < Math.pow(-2,31) || num > (Math.pow(2,31)-1);
//     return outrange?0:num;
// };
// console.log(reverse(234));
var reverse = function(x) {
    let f = 1;
    if(x < 0){
        f = -1;
        x = -x;
    }
    let result = 0;
    while(x>0){
        result = result*10 + x%10;
        x = Math.floor(x/10);
    }
    if(result > Math.pow(2,31)){
        result = 0;
    }
    return result*f;
};
console.log(reverse(405380));