//发红包的功能
function hongbao(total,num) {
    let arr = [];//声明数组
    let restAmount = total;//发到的最后一个人拿剩余的钱
    let restNum = num;
    for(let i = 0; i < num - 1; i++){
        //随机算法
        let amount = total / num;
        arr.push(amount)
        restAmount-=amount;
    }
    arr.push(restAmount);
    //1.钱数要对得上
    //2.随机，平均数(total/num 0.125)
    return arr;
}

console.log(hongbao(5,40));