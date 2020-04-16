function sum(a, b) {
    if (typeof a != 'number' || typeof b !='number'){
        throw new Error('参数类型有误');
        return;
    }
    return a + b;
}
console.log(sum(3.5, 4.6))