// js es6  class 关键字 面向对象
const UUID = require('uuid'); // 引入第三方库，

class Wallet {
    // 属性和方法组成
    constructor() { //构造函数里声明
        this._id = UUID.v1().replace(/-/g,''); //命名规则约定  _变量 私有
        // 创建时间 不能改
        this._createTime = new Date(); //类型转换
        // 余 额 怎么设计?
        this._balance = 0; // 余额设计成私有属性 安全 规则

        this._modifytime = new Date();
        // console.log(this.id);
        // console.log('欢迎使用支付宝钱包');
        // 设计支付宝用的钱包， 几十亿人都在用的
        // 19979113182 
        // 数字货币的概念 比特币， 
        // 1. 唯一 id， autoincremnet  Node, 绝对不会重复 
    }
    getBalance() {
        return this._balance;
    }
    //   setBalance() {

    //   }
    increaseBalance(increasedAmount) { //
        console.log('多了' + increasedAmount);
        console.log('修改时间为' + this.getModifyTime());
        this._balance += increasedAmount; 
    }
    decreaseBalance(decreasedAmount) {
        console.log('修改时间为' + this.getModifyTime());
        this._balance -= decreasedAmount;
    }
    getModifyTime() {
        return this._modifytime;
    }
    getCreateTime() {
        return this._createTime;
    }
    getId() {
        return this._id;
    }
    setId() {
        throw new Error('私有属性_id 不可以修改');
    }

}

const zzwWallet = new Wallet(); //实例化
console.log(zzwWallet.getId());
// console.log(zzwWallet.setId());
console.log(zzwWallet.getCreateTime());
console.log(zzwWallet.getBalance());
zzwWallet.increaseBalance(10.0);
zzwWallet.decreaseBalance(8.1);
console.log(zzwWallet.getBalance().toFixed(2));
// // zzwWallet._id = '12212'; //id 属性只读， 但不能修改
// console.log(zzwWallet._id); // id 是zzwWallet 的public 属性