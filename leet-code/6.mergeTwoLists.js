function mergeTwoLists(list1, list2){
    let res = new ListNode()
    let l1 = 0
    let l2 = 0
    while(list1[l1] && list2[l2] ){
        if(list1[l1] < list2[l2]){
            res.push(list1[l1])
            l1++
        }else if(list1[l1] == list2[l2]){
            res.push(list1[l1],list2[l2])
            l1++
            l2++
        }else {
            res.push(list2[l2])
            l2++
        }
    }
    if(l1 < list1.length){
        res = res.concat(list1.slice(l1))
    }
    if(l2 < list2.length){
        res = res.concat(list2.slice(l2))
    }
    l1 = null
    l2 = null
    return res
}

console.log(mergeTwoLists([1,2,4],[1,3,4]))