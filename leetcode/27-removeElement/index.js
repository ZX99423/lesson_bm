var removeElement = function(nums, val) {
    let count = 0;
    let len = nums.length;
    for (let i = 0 ; i < len; i++ ){
        if (nums[i] != val){
            nums[count] = nums[i];
            count ++;
        }
    }
    return count;
};
console.log(removeElement([0,1,2,2,3,0,4,2],2));