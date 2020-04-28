var myAtoi = function (str) {
    // let i = 0,
    //     num;
    // while (i < str.length) {
    //     if (num == undefined) { //找到第一个非空字符
    //         if (str[i] == ' ') {
    //             i++;
    //             continue;
    //         }
    //         else if (str[i] == '-' || str[i] == "+" || str[i] >= 0) {
    //             num = str[i];
    //         }
    //         else {
    //             return 0;
    //         }
    //     }
    //     else if(str[i] >= 0){
    //         num += str[i]; 
    //         if (num < Math.pow(-2, 31)) return Math.pow(-2, 31);
    //         if (num > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
    //     }
    //     else{
    //         break;
    //     }
    //     i++;
    // }
    // return parseInt(num) || 0
    let num = parseInt(str, 10);
    if (isNaN(num)) {
        return 0;
    }
    if (num < Math.pow(-2, 31)) return Math.pow(-2, 31);
    if (num > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
    return parseInt(num);
};
console.log(myAtoi('   -z42'))