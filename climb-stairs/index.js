// 楼梯有n级，假如第一步走了1级，则剩余方法为f(n-1)
// 假如第一步走了2级，则剩余方法为f(n-2)
// 所以爬楼梯的方法有f(n-1)+f(n-2)种
function climbstairs(stairnum){
    if ( stairnum==1 || stairnum==2){
        return stairnum;
    }
    else{
        return climbstairs(stairnum-1) + climbstairs(stairnum-2);
    }
}
console.log(climbstairs(6))