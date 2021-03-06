// 时间复杂度.  n*n = O(n^2)
// var twoSum = function(nums, target) {
//     let arr = []; //坐标放进去
//     for (let i = 0; i < nums.length; i++){ //暴力解法
//         //循环一遍
//         for (let j = i + 1; j < nums.length; j++){ //内层循环
//             // 不能自己加自己
//             if(nums[i] + nums[j] === target) {
//                 arr = [i, j];
//                 return arr;
//             }
//         }
//     }
// }
//省省时间 O(n^2) -> O(n)

const twoSum = function(nums, target) {
    // 两重循环，
    // target , 一重循环， nums[i], target-nums[i]
    let map = {}; //对象字面量
    nums.forEach(function(e, i){
        // console.log(e, i);
        map[e] = i;
    })
    for (let i = 0;i < nums.length; i++){
        let j = map[target - nums[i]];
        if(j && j !== i){
            return [i,j];
        }
    }
};
twoSum([2, 7, 11, 15], 9);
//时间复杂度 n + n = 2n O(n)=n