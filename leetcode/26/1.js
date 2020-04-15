// 新长度 = 原长度-重复元素的个数
var removeDuplicates = function(nums) {
    let repetnum = 0;
    let len = nums.length;
    for (let i = 1; i < len; i++){
        if (nums[i] != nums[i - 1]){
            //将不重复的元素前移重复元素个数
            nums[i - repetnum] = nums[i];
        }
        else{
            repetnum++;
        }
    }
    return len - repetnum;
};
// console.log(removeDuplicates([0,0,1,1,2,2,3,4,5,6,6]));

// var removeDuplicates = function(nums){
//     let i = 0,
//         j = 1;
//     while (j < nums.length){
//         if (nums[i] == nums[j]){
//             j++;
//         }
//         else{
//             nums[i+1] = nums[j];
//             i++;
//             j++;
//         }
//     }
//     return ++i;
// };
// var removeDuplicates = function(nums){
//     let len = nums.length;
//     let j = 1;
//     for ( let i = 0; i < len; i++){
//         if (nums[i] == nums[j])
//         {
//             nums.splice(j, 1);
//         }
//         j++;
//     }
//     console.log(nums)
//     return nums.length;
// };
console.log(removeDuplicates([0,0,1,1,2,2,3,3,4]))
