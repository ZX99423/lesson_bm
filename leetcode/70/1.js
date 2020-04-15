/**
 * @author zx
 * @date 2020-4-14
 * @func 爬楼梯算法
 * @param {@type number} n 
 */
function climbStairs(n) {
    if (n >= 40) throw new Error('内存会溢出')
    if (n == 1 || n == 2) return n;
    return climbStairs(n-1) + climbStairs(n-2);
}

console.log(climbStairs(45));