var isValid = function(s) {
    var stack = [];
    var map = new Map();
    map.set("(",")");
    map.set("{","}");
    map.set("[","]");
    for(var i = 0;i < s.length;i++){
        if(!map.get(s[i])){
            if(stack.length == 0){
                return false;
            }
            var topEle = stack.pop();
            if(map.get(topEle) != s[i]){
                return false;
            }
        }else{
            stack.push(s[i]);
        }
    }
    return stack.length == 0;
};
console.log(isValid("([)]"))
console.log(isValid("([])"))