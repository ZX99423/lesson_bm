// 长方形面积的函数
function area(w, h) { //es5
    console.log(arguments);
    if (arguments.length < 2){
        console.error('参数不够');
        throw new Error('请传递w,h两个参数');
        return;
    }

    if (typeof w != 'number' || typeof h != 'number') {
        throw new Error('参数类型有误');
        return;
    }

    return w * h;
}

console.log(area(3,2))
// var area = function(w, h) { //匿名函数
// }

// let getArea = (w, h) => w*h; // 箭头函数 es6