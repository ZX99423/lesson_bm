var longestCommonPrefix = function(strs) {
    if (strs.length == 0) return '';
    let temp = strs[0];
    for (let i = 1; i < strs.length; i++){
        let j;
        for(j = 0; j < temp.length && j < strs[i].length; j++){
            if(strs[0][j] != strs[i][j]) break;
        }
        temp = temp.substring(0, j);
    }
    return temp;
    
};
console.log(longestCommonPrefix(["flower","flow","flight"]))