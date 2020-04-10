var fs = require('fs'); //node file system 
var path = require('path'); // 路径
// uuid npm 第三方
// fs.readFile('aa.txt', function(err, data) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data.toString());
// })

// function getDirFiles(startPath) {
//     // 子目录，孙目录 递归目录
//     // 1. 一个大问题 分解成很多个相同的小问题
//     // 2. 退出条件 目录下没有子目录
//     let result = [];
//     // process node 全局变量 进程
//     // console.log(path.join(process.cwd(),startPath),'------')
//     // // 1.读取所有文件?
//     let files = fs.readdirSync(path.join(process.cwd(),startPath));
//     // console.log(files)
//     for (let file of files) {
//         // console.log(file)
//         let stats = fs.statSync(path.join(process.cwd(),startPath,file));
//         if (stats.isFile()) {
//             result.push(file)
//         }
//         if(stats.isDirectory()) {

//         }
//         // console.log(stats);
//     }
//     return result;
// }
function getDirFiles(startPath) {
    let result = [];
    // 递归
    function finder(parentPath) {
        // console.log(path);
        let files = fs.readdirSync(parentPath);
        if (!files.length) return;
        // console.log(files);
        files.forEach(function(val, index) {
            // console.log(val, index);
            // 目录还是文件
            let fPath = path.join(parentPath, val)
            // console.log(fPath);
            let stats = fs.statSync(fPath);
            if (stats.isDirectory()) {
                finder(fPath);
            }
            if (stats.isFile()) {
                result.push(fPath);
            }
        })
    }
    finder(path.join(process.cwd(),startPath));
    return result;
}
console.log(getDirFiles('src'));