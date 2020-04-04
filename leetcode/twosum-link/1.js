var addTwoNumbers = function(l1, l2) {
    let nums = new ListNode('head'); //定义一个链表，并初始化第一个节点为“node”
    let sum, n = 0, temp = nums; //将该链表赋值给temp,使他们共用一个数据空间
    while(l1||l2){
        const n1 = l1?l1.val:0;
        const n2 = l2?l2.val:0;
        sum = n1 + n2 + n;
        n = parseInt(sum / 10); // 当该节点相加的值大于10时，会产生进位，这时下一个节点需要加上n
        temp.next = new ListNode(sum % 10);
        temp = temp.next; //指向下一个指针
        if(l1)
        l1 = l1.next;
        if(l2)
        l2 = l2.next;
    }
    if(n > 0)
    temp.next = new ListNode(n); //若最后两项相加大于10时，那么产生进位
    return nums.next; //因为第一个节点为'head',因此返回值需要从下一个节点开始
};
console.log(addTwoNumbers([2,4,3],[5,6,4]));