function removeDuplicates(nums){
    if(nums.length < 2) return nums
    let i = 1
    while(i < nums.length){
        if(nums[i] === nums[i-1]){
            nums.splice(i,1)
        }else{
            i++
        }
    }
    return nums
}

console.log(removeDuplicates([1,1,2]))