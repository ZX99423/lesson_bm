var lengthOfLongestSubstring = function(s) {
    let temp = '';
    let len = 0;
    let longeststring = '';
    for ( let i = 0; i < s.length; i++){
        if (!temp.includes(s[i])){
            temp = temp + s[i];
            if (temp.length > len){
                longeststring = temp;
                len = temp.length;
            }
        }
        else{
            temp = temp + s[i];
            let index = temp.indexOf(s[i]);
            temp = temp.slice(index + 1);
        }
    }
    return len;
};
console.log(lengthOfLongestSubstring('abcabcbb'));