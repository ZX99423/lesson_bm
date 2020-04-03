let enc_qq = [6,3,1,7,5,8,9,2,4],
    qq = [], //真正的qq号
    head = 0, //头指针 变量中间值
    tail = 9;
//console.log(typeof enc_qq); // object 对象的一种，可以枚举的对象
// 移除第一个元素，第二个元素放置到最后
while(head < tail){ //退出条件 length boolean
    //规则的
    //push 将一个数加入一个数组中
    qq.push(enc_qq[head]) //抽象能力
    head++;
    enc_qq[tail] = enc_qq[head];
    tail++;
    head++;
}
console.log(qq.join(''))