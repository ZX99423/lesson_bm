var findMedianSortedArrays = function (nums1, nums2) {
    let len1 = nums1.length, len2 = nums2.length;
    let mid = len1 + len2 >> 1; //  >> 将一个32位的二进制数右移
    let i = 0, j = 0, temp, n1, n2;
    while(i < len1 || j < len2){
        if (j === len2 || nums1[i] < nums2[j]){
            temp = nums1[i];
            i++;
        }
        else{
            temp = nums2[j];
            j++;
        }
        if (mid === i + j)
            n1 = temp;
        if (mid + 1 === i + j)
            n2 = temp;
    }
    let midnum = (len1 + len2) % 2 === 0 ? (n1 + n2) / 2 : n2;
    return midnum;
};
console.log(findMedianSortedArrays([1,3],[2]));
console.log(findMedianSortedArrays([1,2,3],[2,4,6,7]));