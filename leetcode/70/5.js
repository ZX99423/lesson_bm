function f(n) {
    if (n == 1) return 1;
    if (n == 2) return 2;
    // 重复计算的 要使得时间和内存更好
    // 变量可以
    let ret = 0,
        pre = 2, //前一个是2
        prepre = 1;
    // 递归可以优化成循环
    for (let i = 3; i <= n; i++) {
        ret = pre + prepre;
        prepre = pre;
        pre = ret;    
    }
    return ret;
}
console.log(f(300))