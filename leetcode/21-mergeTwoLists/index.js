var mergeTwoLists = function(l1, l2) {
    let NewNode = new ListNode(-1);
    let NewHead = NewNode;
    if(!l1) return l2;
    if(!l2) return l1;
    while(l1 && l2){
        if (l1.val < l2.val){
            NewHead.next = l1;
            l1 = l1.next;
            NewHead = NewHead.next;
        }
        else{
            NewHead.next = l2;
            l2 = l2.next;
            NewHead = NewHead.next;
        }
    }
    NewHead.next = l1 ? l1 : l2;
    return NewNode.next;
};
